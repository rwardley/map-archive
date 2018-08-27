/* Rosemary Wardley: Geog 778-Map Archive JS*/

document.getElementById("submitBtn").addEventListener("click", function(){
    
   decades.forEach(function(item, index, array){
       var yearCheckbox = document.querySelector('input[value="' + item + '"]');
       
       if(yearCheckbox.checked) {
           queryArray.push("decade="+item);
       }
});
    
console.log(queryArray)  

var queryDecadeParam = queryArray.join("&")
console.log(queryDecadeParam)

 $.ajax("http://localhost:3000/api?"+queryDecadeParam,{
        dataType: "json",
        crossOrigin: true,
        success: function(response){console.log(response)
        
        }
    });

//make the ajax query call for everything that ends up in the queryArray +9
//how do i pass the years that I want into the app.js dynamically
//where do the results pop up and how do I get them to pull up the images
      
});
var queryArray = [];
//make integers
var decades = [1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010];
