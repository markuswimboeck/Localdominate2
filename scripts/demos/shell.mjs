// Shared page shell for the industry demos under public/demo/<slug>/ (DE) and public/demo/<slug>/en/ (EN).
// Every demo is a fictional business, labelled as a concept in a bar at the top and in the footer,
// noindex, with no invented reviews, results or clients. See scripts/demos/README.md.

const FONT_FILES = {
  bodoni: [
    ['Bodoni Moda', 'normal', '400 900', 'bodoni-moda-latin-standard-normal.woff2'],
    ['Bodoni Moda', 'italic', '400 900', 'bodoni-moda-latin-standard-italic.woff2'],
  ],
  hanken: [['Hanken Grotesk', 'normal', '100 900', 'hanken-grotesk-latin-wght-normal.woff2']],
  archivo: [['Archivo', 'normal', '100 900', 'archivo-latin-standard-normal.woff2']],
  marcellus: [['Marcellus', 'normal', '400', 'marcellus-latin-400-normal.woff2']],
  karla: [['Karla', 'normal', '200 800', 'karla-latin-wght-normal.woff2']],
};

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const BAR = {
  de: {
    label: 'Über diese Demo',
    tag: 'Konzept-Demo',
    lang: 'English',
    langLabel: 'Diese Demo auf Englisch',
  },
  en: {
    label: 'About this demo',
    tag: 'Concept demo',
    lang: 'Deutsch',
    langLabel: 'This demo in German',
  },
};

/**
 * @param {object} o
 * @param {'de'|'en'} o.lang
 * @param {string} o.slug           folder under /demo/
 * @param {string} o.title
 * @param {string} o.description
 * @param {string} o.theme          theme-color
 * @param {string} o.icon           data: URI of the favicon
 * @param {string[]} o.fonts        keys of FONT_FILES
 * @param {string} o.barText        sentence after the tag
 * @param {{href:string,text:string}} o.barLink  link to the LocalDominate offer page
 * @param {string} o.css
 * @param {string} o.body
 * @param {string} o.js
 */
export function page(o) {
  const b = BAR[o.lang];
  const self = o.lang === 'de' ? `/demo/${o.slug}/` : `/demo/${o.slug}/en/`;
  const other = o.lang === 'de' ? `/demo/${o.slug}/en/` : `/demo/${o.slug}/`;
  const faces = o.fonts
    .flatMap((k) => FONT_FILES[k])
    .map(
      ([family, style, weight, file]) =>
        `@font-face{font-family:"${family}";font-style:${style};font-weight:${weight};font-display:swap;src:url("/demo/fonts/${file}") format("woff2")}`
    )
    .join('\n');
  const preload = o.fonts
    .map((k) => FONT_FILES[k][0][3])
    .map((f) => `<link rel="preload" href="/demo/fonts/${f}" as="font" type="font/woff2" crossorigin>`)
    .join('\n');
  return `<!doctype html>
<html lang="${o.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.description)}">
<link rel="canonical" href="https://localdominate.org${self}">
<link rel="alternate" hreflang="${o.lang === 'de' ? 'en' : 'de'}" href="https://localdominate.org${other}">
<meta name="theme-color" content="${o.theme}">
<link rel="icon" href="${o.icon}">
${preload}
<style>
${faces}
.ld-bar{position:relative;z-index:50;display:flex;flex-wrap:wrap;align-items:center;gap:.4rem 1rem;padding:.6rem max(1rem,calc((100vw - 1200px)/2));background:#16161a;color:#ecebe7;font:500 13px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif}
.ld-bar p{margin:0;flex:1 1 22rem;color:#cfcdc6}
.ld-bar b{display:inline-block;margin-right:.5rem;padding:.1rem .5rem;border-radius:4px;background:#ecebe7;color:#16161a;font-weight:700}
.ld-bar a{color:#fff;text-underline-offset:3px}
.ld-bar nav{display:flex;gap:1rem;flex-wrap:wrap}
.ld-bar a:focus-visible{outline:2px solid #fff;outline-offset:3px;border-radius:2px}
${o.css}
</style>
</head>
<body>
<div class="ld-bar" role="note" aria-label="${b.label}">
  <p><b>${b.tag}</b>${o.barText}</p>
  <nav aria-label="${b.label}">
    <a href="${o.barLink.href}">${esc(o.barLink.text)}</a>
    <a href="${other}" hreflang="${o.lang === 'de' ? 'en' : 'de'}" lang="${o.lang === 'de' ? 'en' : 'de'}" aria-label="${b.langLabel}">${b.lang}</a>
  </nav>
</div>
${o.body}
<script>
${o.js}
</script>
</body>
</html>
`;
}

/** Opening-hours helper shared by the demos (runs in the browser). Hours: {weekday 0-6: [open, close] | null}. */
export const HOURS_JS = `
function ldStatus(hours, t){
  var now=new Date(), d=now.getDay(), m=now.getHours()*60+now.getMinutes();
  function fmt(x){var h=Math.floor(x/60), mm=x%60; return h+':'+(mm<10?'0':'')+mm;}
  var today=hours[d];
  if(today && m>=today[0] && m<today[1]) return {open:true, text:t.openUntil.replace('{t}',fmt(today[1]))};
  if(today && m<today[0]) return {open:false, text:t.opensToday.replace('{t}',fmt(today[0]))};
  for(var i=1;i<8;i++){var dd=(d+i)%7; if(hours[dd]) return {open:false, text:t.opensOn.replace('{d}',t.days[dd]).replace('{t}',fmt(hours[dd][0]))};}
  return {open:false,text:''};
}`;
