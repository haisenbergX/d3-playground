---
attr:
  rel: stylesheet
  href: //bigdata-mindstorms.github.io/d3-playground/LivingProgram/2016/03/06/background.css
---
d3.select('head').append('link').attr({{ page.attr | jsonify}});
