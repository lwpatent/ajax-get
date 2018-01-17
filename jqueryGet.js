console.log('jqueryget loaded!');


$(function(){
  //on document load
  $('#github').click(function(evt) {
    //on github click
    evt.preventDefault();
    const url = "https://en.wikipedia.org/wiki/Parks_and_Recreation";

    // get data from url
    $.get(url, function(result){
      getData(result);
      $('#output').append(getData(result));
    });
  });
});


function getData(result) {
  let output = ""
  output += "<ul>"
for(const key in result) {
  output += "<li>";
  output += key + " -- " + result[key];
  output += "</li>";
}
output += "</ul>";
return output;
}
