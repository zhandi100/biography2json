var input="input";  // input folder name
var output="out";

/////////////////////////////////////////////////////
var fs=require("fs");
var junk=require('junk');
var glob=require('glob');
var xlsx_json=require("xlsx-to-json");
var mkdirp=require("mkdirp");
var path=require("path").dirname;
var arr=[];
fs.readdir(input, function(err, list) {
  
    if(list[0] == '.DS_Store')
    list.splice(0,1);
	list.map(xlsxtojson);
    // display files
});
    
var xlsxtojson=function(xlsx) {
	var name=xlsx.split(".");
	var outfn="out/"+name[0];
	var dir=path(outfn);
	mkdirp.sync(dir);
	xlsx_json({
	  input: __dirname + "/"+input+"/"+name[0]+".xlsx",
	  output: __dirname + "/"+output+"/"+name[0]+".json"
	}, function(err, result) {
	  
	  if(err) {
	    console.error(err);
	  } 
	});
} 
//list.map(xlsxtojson);
//console.log(xlsxtojson(file));
//console.log(arr,arr.length);