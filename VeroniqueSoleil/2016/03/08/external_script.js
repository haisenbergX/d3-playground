---
attr:
  charset: 'utf-8'
  src: //bigdata-mindstorms.github.io/d3-playground/VeroniqueSoleil/2016/03/08/background.js
---
d3.select('head').append('script').attr({{ page.attr | jsonify }});
