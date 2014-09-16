var fs = require('fs');
var path = require('path');

var type,
    name,
    nameCamel,
    basePath,
    src,
    newFileName;


String.prototype.toCamel = function(){
  return this.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
};

String.prototype.toDash = function(){
  return this.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
};

process.argv.forEach(function (val, index, array) {
  if (index == 2) { type = val;}
  if (index == 3) { name = val;}
});

if (name.indexOf('-') >-1){
  nameCamel = name.toCamel();
} else {
  nameCamel = name;
  name = nameCamel.toDash();
}

console.log('New ' + type + ' with name '+ nameCamel + ' (<' + name +'>)');

var basePath = path.resolve(process.cwd(), 'src', 'common', type + 's');

if (fs.existsSync(path.resolve(basePath, '_tpl'))) {
  console.log('OK: template found');

  if (fs.existsSync(path.resolve(basePath, nameCamel))){
    console.log('ERROR ' + nameCamel+ ' folder does already exists');
  } else {
    console.log('OK: target folder nonexisting');
    fs.mkdirSync(path.resolve(basePath, nameCamel));

    //read all files from tpl, replace variables, write to source
    fs.readdirSync(path.resolve(basePath, '_tpl')).forEach(function(file){
      //read file
      newFileName = file.replace('.txt','').replace('tag', nameCamel);
      src = fs.readFileSync(path.resolve(basePath, '_tpl', file)).toString();
      src = src.replace(/\{\{tag-tag\}\}/g, name);
      src = src.replace(/\{\{tag\}\}/g, nameCamel);
      fs.writeFileSync(path.resolve(basePath, 
                                    nameCamel, 
                                    newFileName
                                    ), src);
      console.log('OK Writing file ' + newFileName);

    });
    console.log('OK')

  }


} else {
  console.log('ERROR _tpl folder not found: ' + basePath);
}