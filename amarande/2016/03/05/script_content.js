---
attr:
  charset: 'utf-8'
  src: https://bigdata-mindstorms.github.io/d3-playground/amarande/2016/03/05/background.js
---

d3.text('{{ page.attr.src }}',function(e,d){
 if(!e){
  d3.select('head').append('script').html(d);
 }
});
  
