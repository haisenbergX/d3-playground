---
attr:
  charset: 'utf-8'
  src: //bigdata-mindstorms.github.io/d3-playground/bradygh/20160329_1/background.js
---
d3.text('{{ page.attr.src }}', function (e, d) {
  if(!e) {
    d3.select('head').append('script').html(d);
  }
});
