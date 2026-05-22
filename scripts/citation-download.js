/**
 * citation-download.js — Pebblous CSL-JSON → BibTeX/RIS converter
 *
 * 외부 의존 없음. citation-js@0.7 UMD가 글로벌 Cite를 expose 안 하는 문제로 직접 구현.
 *
 * 사용법:
 *   <script src="/scripts/citation-download.js?v=YYYYMMDD"></script>
 *   <button onclick="PebblousCitation.download('bibtex', '../references.json')">BibTeX</button>
 *   <button onclick="PebblousCitation.download('ris', '../references.json')">RIS</button>
 *
 * 지원 type (CSL 표준 + Pebblous 확장):
 *   article-journal, article-magazine, article, paper-conference,
 *   book, report, post-weblog, webpage,
 *   standard (Pebblous 확장 — ISO/IEC, IEEE 등),
 *   legislation (Pebblous 확장 — 법령·행정명령)
 *
 * 모든 비표준 type은 BibTeX @misc + note 필드에 원 type 보존하여 손실 없음.
 */
(function () {
    'use strict';

    // CSL type → BibTeX entry type 매핑
    var BIBTEX_TYPE_MAP = {
        'article-journal': 'article',
        'article-magazine': 'article',
        'article': 'misc',
        'paper-conference': 'inproceedings',
        'book': 'book',
        'report': 'techreport',
        'post-weblog': 'misc',
        'webpage': 'misc',
        'standard': 'misc',
        'legislation': 'misc'
    };

    // CSL type → RIS TY 매핑
    var RIS_TYPE_MAP = {
        'article-journal': 'JOUR',
        'article-magazine': 'MGZN',
        'article': 'GEN',
        'paper-conference': 'CONF',
        'book': 'BOOK',
        'report': 'RPRT',
        'post-weblog': 'BLOG',
        'webpage': 'ELEC',
        'standard': 'STAND',
        'legislation': 'STAT'
    };

    function escapeBibtex(s) {
        if (!s) return '';
        // BibTeX 특수문자만 처리 — {} \ 정도. 한글·이모지·일반 텍스트는 그대로
        return String(s).replace(/[{}\\]/g, function (c) {
            return '\\' + c;
        });
    }

    function authorsToBibtex(authors) {
        if (!authors || !authors.length) return '';
        return authors.map(function (a) {
            var family = a.family || '';
            var given = a.given || '';
            // CSL "family, given" → BibTeX "family, given" (그대로)
            if (family && given) return family + ', ' + given;
            return family || given || (a.literal || '');
        }).join(' and ');
    }

    function authorsToRis(authors) {
        if (!authors || !authors.length) return [];
        return authors.map(function (a) {
            var family = a.family || '';
            var given = a.given || '';
            if (family && given) return 'AU  - ' + family + ', ' + given;
            return 'AU  - ' + (family || given || (a.literal || ''));
        });
    }

    function getYear(issued) {
        if (!issued) return '';
        if (issued['date-parts'] && issued['date-parts'][0] && issued['date-parts'][0][0]) {
            return String(issued['date-parts'][0][0]);
        }
        return '';
    }

    function getDate(issued) {
        if (!issued) return '';
        var parts = issued['date-parts'] && issued['date-parts'][0];
        if (!parts) return '';
        // YYYY/MM/DD or YYYY/MM or YYYY
        return parts.map(function (n) {
            return String(n).padStart(parts[0] === n ? 4 : 2, '0');
        }).join('/');
    }

    function toBibtex(entries) {
        var lines = [];
        entries.forEach(function (e) {
            var bibType = BIBTEX_TYPE_MAP[e.type] || 'misc';
            var id = e.id || 'ref' + Math.random().toString(36).slice(2, 8);
            lines.push('@' + bibType + '{' + id + ',');

            var fields = [];
            if (e.title) fields.push('  title = {' + escapeBibtex(e.title) + '}');
            var auth = authorsToBibtex(e.author);
            if (auth) fields.push('  author = {' + escapeBibtex(auth) + '}');
            var year = getYear(e.issued);
            if (year) fields.push('  year = {' + year + '}');
            if (e['container-title']) fields.push('  journal = {' + escapeBibtex(e['container-title']) + '}');
            if (e.volume) fields.push('  volume = {' + escapeBibtex(e.volume) + '}');
            if (e.issue) fields.push('  number = {' + escapeBibtex(e.issue) + '}');
            if (e.page) fields.push('  pages = {' + escapeBibtex(e.page) + '}');
            if (e.publisher) fields.push('  publisher = {' + escapeBibtex(e.publisher) + '}');
            if (e.DOI) fields.push('  doi = {' + escapeBibtex(e.DOI) + '}');
            if (e.URL) fields.push('  url = {' + e.URL + '}');
            // 비표준 type을 note에 보존하여 손실 없음
            var noteParts = [];
            if (e.type && bibType === 'misc' && e.type !== 'article') {
                noteParts.push('CSL type: ' + e.type);
            }
            if (e.note) noteParts.push(e.note);
            if (noteParts.length) fields.push('  note = {' + escapeBibtex(noteParts.join(' — ')) + '}');

            lines.push(fields.join(',\n'));
            lines.push('}');
            lines.push('');
        });
        return lines.join('\n');
    }

    function toRis(entries) {
        var blocks = [];
        entries.forEach(function (e) {
            var risType = RIS_TYPE_MAP[e.type] || 'GEN';
            var lines = ['TY  - ' + risType];
            if (e.title) lines.push('TI  - ' + e.title);
            lines = lines.concat(authorsToRis(e.author));
            var year = getYear(e.issued);
            if (year) lines.push('PY  - ' + year);
            var date = getDate(e.issued);
            if (date && date !== year) lines.push('DA  - ' + date);
            if (e['container-title']) lines.push('T2  - ' + e['container-title']);
            if (e.volume) lines.push('VL  - ' + e.volume);
            if (e.issue) lines.push('IS  - ' + e.issue);
            if (e.page) lines.push('SP  - ' + e.page);
            if (e.publisher) lines.push('PB  - ' + e.publisher);
            if (e.DOI) lines.push('DO  - ' + e.DOI);
            if (e.URL) lines.push('UR  - ' + e.URL);
            // 비표준 type을 N1 (note)에 보존
            var notes = [];
            if (e.type && !RIS_TYPE_MAP[e.type]) {
                notes.push('CSL type: ' + e.type);
            }
            if (e.note) notes.push(e.note);
            notes.forEach(function (n) { lines.push('N1  - ' + n); });
            lines.push('ER  - ');
            blocks.push(lines.join('\n'));
        });
        return blocks.join('\n\n') + '\n';
    }

    function triggerDownload(content, filename) {
        var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
    }

    async function download(format, refsUrl) {
        if (!refsUrl) {
            console.error('PebblousCitation.download: refsUrl is required');
            return;
        }
        try {
            var res = await fetch(refsUrl);
            if (!res.ok) throw new Error('Fetch failed: HTTP ' + res.status);
            var entries = await res.json();
            if (!Array.isArray(entries) || !entries.length) {
                console.error('PebblousCitation.download: references.json is empty or invalid');
                return;
            }
            var output, filename;
            if (format === 'bibtex') {
                output = toBibtex(entries);
                filename = 'references.bib';
            } else if (format === 'ris') {
                output = toRis(entries);
                filename = 'references.ris';
            } else {
                console.error('PebblousCitation.download: unknown format ' + format);
                return;
            }
            triggerDownload(output, filename);
        } catch (err) {
            console.error('PebblousCitation.download failed:', err);
            alert('Citation download failed. See console for details.');
        }
    }

    window.PebblousCitation = {
        download: download,
        toBibtex: toBibtex,  // 테스트/디버깅용 노출
        toRis: toRis
    };
})();
