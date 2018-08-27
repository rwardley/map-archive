//JS scrap//

//var sqlQuery = "SELECT map_table.*, geography.geography, geography.type, theme.theme from map_table JOIN geography ON (map_table.id = geography.id) JOIN theme ON (map_table.id = theme.id)";
//
//$('mapButtonCheckBox').click(function()){
//	if(map.hasLayer(sqlQuery)){
//		map.removeLayer(sqlQuery);
//	}
//	else {
//		map.addLayer(sqlQuery);
//	}
//});

var yearCheckbox = document.querySelector('input[value="1970s"]');
//var yearCheckbox = document.querySelector('#1970s')
//var yearText = document.querySelector('input[id="1970s"]');
//yearCheckbox.style.visibility = 'visible';
//yearText.style.visibility = 'hidden';

console.log(yearCheckbox)

yearCheckbox.onchange = function() {
  if(yearCheckbox.checked) {
    //yearCheckbox.style.visibility = 'visible';
    console.log(1)
    yearCheckbox.value = '';
  } else {
    console.log(2)
    //yearCheckbox.style.visibility = 'hidden';
  }
     console.log(yearCheckbox)
};

  var x = document.querySelector("#1970s")[0].getAttribute("id"); 
    document.getElementById("demo").innerHTML = x;
console.log(x)


document.getElementById("submitBtn").addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "put the value of the checkbox here?";
    document.getElementById("demo").innerHTML = yearCheckbox.value;
    ///loop through decade
    ///create new variable for each checkbox
    
   if(yearCheckbox.checked) {
   console.log(1)
   //yearCheckbox.value = '';
 } else {
   console.log(2)
  };
});

//LOOP!!
var yearCheckbox = document.querySelector('input[value="1970s"]');
if(yearCheckbox.checked) {
    //add input value to SQL query
    console.log(yearCheckbox)
    console.log(1)
};


/* Rosemary Wardley: Geog 778-Map Archive JS*/

document.getElementById("submitBtn").addEventListener("click", function(){
    //after click will LOOP through checkboxes!!
//    document.getElementById("demo").innerHTML = yearCheckbox.value;
    
    ///loop through decade
    ///create new variable for each checkbox
    
   decades.forEach(function(item, index, array){
       var yearCheckbox = document.querySelector('input[value="' + item + '"]');
       
       if(yearCheckbox.checked) {
           queryArray.push(item);
       }
    
});
 
    
console.log(queryArray)   

//make the ajax query call for everything that ends up in the queryArray +9
//how do i pass the years that I want into the app.js dynamically
//where do the results pop up and how do I get them to pull up the images
    
    
});
var queryArray = [];
//make integers
var decades = [1880, '1890', '1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010'];



//var yearCheckbox = document.querySelector('input[value="1970s"]');
//var yearCheckbox2 = document.querySelector('input[value="1980s"]');
//if(yearCheckbox.checked) {
//    //add input value to SQL query
//}

//this is my ARRAY that will be looped through, create DOM object based on decade
//var decades = ['1880s', '1890s', '1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s'];
////console.log(decades.length);

//need to insert the array item into the VARIABLE above 'input[value="item"]'

//for(var i=0, len=myArray.length; i < len; i++){}
//for (var decades=0, len=decades.length; decades < len; decades++){};

//for(var i = 0; i < things.length; i++){
//    var thing = things[i];
//    console.log(thing);
//}