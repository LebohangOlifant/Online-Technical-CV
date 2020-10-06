/*Start of download button functionality*/
$(document).ready(function(){
   $('button').click(function(e){
      e.preventDefault();
      window.location.href = "CV.pdf"
   });
});

/*End of download button functionality*/



/*Start of API Section*/
var city = "Vanderbijlpark";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5d6d862d8577f830164f96a4caba27d5", 
         function(data){
            console.log(data);

            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = data.main.temp;
            var weather = data.weather[0].main

            $(".icon").attr("src", icon);
            $(".temp").append(temp);
            $(".weather").append(weather);
});
/*End of API Section*/