$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Vanderbijlpark&units=degreCelsius&APPID=5d6d862d8577f830164f96a4caba27d5", 
         function(data){
            console.log(data);

            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            console.log(icon);
});