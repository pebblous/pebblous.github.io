#!/bin/bash
# OG Image Resizer for SNS
# Resizes images to optimal 1200x630 for Open Graph / Twitter Cards
# Usage: ./og-image-resize.sh <input_image> [output_image]

set -e

# Configuration
TARGET_WIDTH=1200
TARGET_HEIGHT=630
TARGET_RATIO=$(echo "scale=4; $TARGET_WIDTH / $TARGET_HEIGHT" | bc)
MAX_FILE_SIZE=300  # KB

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check arguments
if [ -z "$1" ]; then
    echo -e "${RED}Error: No input image specified${NC}"
    echo "Usage: $0 <input_image> [output_image]"
    echo ""
    echo "Examples:"
    echo "  $0 image.png                    # Overwrites original"
    echo "  $0 image.png image-og.png       # Creates new file"
    exit 1
fi

INPUT="$1"
OUTPUT="${2:-$1}"

# Check if input file exists
if [ ! -f "$INPUT" ]; then
    echo -e "${RED}Error: File not found: $INPUT${NC}"
    exit 1
fi

# Get current dimensions
CURRENT_WIDTH=$(sips -g pixelWidth "$INPUT" | tail -n1 | awk '{print $2}')
CURRENT_HEIGHT=$(sips -g pixelHeight "$INPUT" | tail -n1 | awk '{print $2}')
CURRENT_RATIO=$(echo "scale=4; $CURRENT_WIDTH / $CURRENT_HEIGHT" | bc)
CURRENT_SIZE=$(ls -lk "$INPUT" | awk '{print $5}')

echo "📊 Current image info:"
echo "   Size: ${CURRENT_WIDTH}x${CURRENT_HEIGHT} (${CURRENT_SIZE}KB)"
echo "   Ratio: $CURRENT_RATIO (target: $TARGET_RATIO)"
echo ""

# Check if resize is needed
if [ "$CURRENT_WIDTH" -eq "$TARGET_WIDTH" ] && [ "$CURRENT_HEIGHT" -eq "$TARGET_HEIGHT" ]; then
    echo -e "${GREEN}✓ Image is already optimal size (${TARGET_WIDTH}x${TARGET_HEIGHT})${NC}"
    exit 0
fi

# Create temp file for processing
TEMP_FILE="/tmp/og-resize-$$-$(basename "$INPUT")"
cp "$INPUT" "$TEMP_FILE"

# Calculate crop/resize strategy
# If ratio is close, just resize. If very different, crop first.
RATIO_DIFF=$(echo "scale=4; $CURRENT_RATIO - $TARGET_RATIO" | bc)
RATIO_DIFF_ABS=$(echo "$RATIO_DIFF" | tr -d -)

if (( $(echo "$RATIO_DIFF_ABS > 0.3" | bc -l) )); then
    echo -e "${YELLOW}⚠ Aspect ratio differs significantly. Will crop to fit.${NC}"

    # Calculate crop dimensions
    if (( $(echo "$CURRENT_RATIO > $TARGET_RATIO" | bc -l) )); then
        # Image is wider - crop width
        NEW_WIDTH=$(echo "scale=0; $CURRENT_HEIGHT * $TARGET_RATIO" | bc)
        CROP_X=$(echo "scale=0; ($CURRENT_WIDTH - $NEW_WIDTH) / 2" | bc)
        sips -c "$CURRENT_HEIGHT" "$NEW_WIDTH" "$TEMP_FILE" --out "$TEMP_FILE" > /dev/null 2>&1
    else
        # Image is taller - crop height
        NEW_HEIGHT=$(echo "scale=0; $CURRENT_WIDTH / $TARGET_RATIO" | bc)
        CROP_Y=$(echo "scale=0; ($CURRENT_HEIGHT - $NEW_HEIGHT) / 2" | bc)
        sips -c "$NEW_HEIGHT" "$CURRENT_WIDTH" "$TEMP_FILE" --out "$TEMP_FILE" > /dev/null 2>&1
    fi
fi

# Resize to target dimensions
echo "🔄 Resizing to ${TARGET_WIDTH}x${TARGET_HEIGHT}..."
sips -z "$TARGET_HEIGHT" "$TARGET_WIDTH" "$TEMP_FILE" --out "$TEMP_FILE" > /dev/null 2>&1

# Check file size and compress if needed
NEW_SIZE=$(ls -lk "$TEMP_FILE" | awk '{print $5}')
if [ "$NEW_SIZE" -gt "$MAX_FILE_SIZE" ]; then
    echo -e "${YELLOW}⚠ File size (${NEW_SIZE}KB) exceeds ${MAX_FILE_SIZE}KB. Compressing...${NC}"

    # Convert to JPEG with quality reduction if PNG is too large
    EXT="${INPUT##*.}"
    if [ "$EXT" = "png" ] || [ "$EXT" = "PNG" ]; then
        # Try to optimize PNG or convert to JPEG
        JPEG_TEMP="/tmp/og-resize-$$-compressed.jpg"
        sips -s format jpeg -s formatOptions 85 "$TEMP_FILE" --out "$JPEG_TEMP" > /dev/null 2>&1
        JPEG_SIZE=$(ls -lk "$JPEG_TEMP" | awk '{print $5}')

        if [ "$JPEG_SIZE" -lt "$NEW_SIZE" ]; then
            echo "   Converting to JPEG saves space (${JPEG_SIZE}KB vs ${NEW_SIZE}KB)"
            # Keep as PNG but note the option
        fi
        rm -f "$JPEG_TEMP"
    fi
fi

# Move to output
mv "$TEMP_FILE" "$OUTPUT"

# Final info
FINAL_WIDTH=$(sips -g pixelWidth "$OUTPUT" | tail -n1 | awk '{print $2}')
FINAL_HEIGHT=$(sips -g pixelHeight "$OUTPUT" | tail -n1 | awk '{print $2}')
FINAL_SIZE=$(ls -lk "$OUTPUT" | awk '{print $5}')

echo ""
echo -e "${GREEN}✅ Done!${NC}"
echo "   Output: $OUTPUT"
echo "   Size: ${FINAL_WIDTH}x${FINAL_HEIGHT} (${FINAL_SIZE}KB)"

# Validate
if [ "$FINAL_WIDTH" -eq "$TARGET_WIDTH" ] && [ "$FINAL_HEIGHT" -eq "$TARGET_HEIGHT" ]; then
    echo -e "   ${GREEN}✓ Dimensions match OG requirements${NC}"
else
    echo -e "   ${YELLOW}⚠ Dimensions may need manual adjustment${NC}"
fi

if [ "$FINAL_SIZE" -le "$MAX_FILE_SIZE" ]; then
    echo -e "   ${GREEN}✓ File size optimal (<${MAX_FILE_SIZE}KB)${NC}"
else
    echo -e "   ${YELLOW}⚠ Consider compressing further (>${MAX_FILE_SIZE}KB)${NC}"
fi
