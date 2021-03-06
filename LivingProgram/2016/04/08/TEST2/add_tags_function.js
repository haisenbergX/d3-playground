function add_tags(data) {
  //title
  d3.select('title').remove();
  d3.select('head').append('title').html(data.title);

  //meta description
  d3.select('head').append('meta').attr("name", "description").attr("content", data.description);
  
  //meta keywords
  d3.select('head').append('meta').attr("name", "keywords").attr("content", data.keywords);

  //all og tags, reference was https://github.com/bigdata-mindstorms/d3-playground/blob/gh-pages/LivingProgram/2016/02/14/data_test.html
  function add_data (selection, property, content) {
    selection.attr("property", property).attr("content", content);
  }
  function create_tags(d) {
    var head = d3.select('head');
    d.forEach(function (d) {
      add_data(head.append('meta'), d.property, d.content);
    });
  }
  create_tags(data.ogtags);
}
