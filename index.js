var marked = require('marked');
var fs = require('fs')

module.exports = function (md_file) {
  if (!fs.existsSync(md_file)){
    console.error('please check if ' + md_file + ' exist')
    return [];
  }
  
  var text = fs.readFileSync(md_file).toString()
  
  var options = {}
  var lexer = new marked.Lexer(options);
  var tokens = lexer.lex(text);
  
  var headings = []
  
  for (var i in tokens) {
    var line = tokens[i]
  
    if (line.type == 'heading') {
      headings.push(line)
    }
  }

  return headings
}
