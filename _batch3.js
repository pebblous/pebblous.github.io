const fs=require('fs'), path=require('path'), puppeteer=require('puppeteer');
const _l=console.log; console.log=()=>{};
const g=require('./tools/generate-og-image.js');
console.log=_l;
const ROOT=__dirname;
const logo='data:image/png;base64,'+fs.readFileSync(path.join(ROOT,'image','Pebblous_BM_Orange_RGB.png')).toString('base64');
const fonts=g.getFontFaces(ROOT);
const list=fs.readFileSync('/tmp/regen_html.txt','utf-8').trim().split('\n').filter(Boolean);
(async()=>{
  const b=await puppeteer.launch({headless:'new',args:['--no-sandbox','--disable-setuid-sandbox']});
  let ok=0,fail=0;
  for(const rel of list){
    try{
      const abs=path.join(ROOT,rel);
      console.log=()=>{}; const {title,subtitle,category,output,light}=g.extractFromHTML(abs,ROOT); console.log=_l;
      const html=g.generateHTML(title,subtitle,g.getTheme(category,light),logo,fonts);
      const p=await b.newPage(); await p.setViewport({width:1200,height:630});
      await p.setContent(html,{waitUntil:'domcontentloaded'});
      await p.evaluate(()=>document.fonts.ready); await new Promise(r=>setTimeout(r,120));
      if(!fs.existsSync(path.dirname(output))) fs.mkdirSync(path.dirname(output),{recursive:true});
      await p.screenshot({path:output,type:'png'}); await p.close(); ok++;
    }catch(e){ fail++; }
  }
  await b.close(); fs.writeFileSync('/tmp/batch3.done','ok='+ok+' fail='+fail);
})();
