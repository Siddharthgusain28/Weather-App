"use strict";
document.querySelector(".getWeather").addEventListener("submit",function(e){
    e.preventDefault()
    const loc=this.loc.value
    const key="d28033b1c9ad443b8ec175055251602"
    const url=`https://api.weatherapi.com/v1/current.json?key=d28033b1c9ad443b8ec175055251602&q=${loc}&aqi=yes`

    fetch(url).then(i=>i.json()).then(i=>{
      if(i.error){
        document.querySelector(".location").innerHTML="<p>🙅‍♂️Location not found</p>"
      }  
      else{
        // console.log(i)
        document.querySelector(".location").innerHTML=
        `<p><strong>📍 :- ${i.location.name}, ${i.location.region}, ${i.location.country}</strong></p>`}
        document.querySelector(".about").innerHTML=`<p><strong>Lat & Long :- ${i.location.lat} & ${i.location.lon}</strong></p>`;
        document.querySelector(".temp h3").innerHTML=`${i.current.temp_c}*c`;
        document.querySelector(".temp p").innerHTML=`<strong>Feels Like :- ${i.current.feelslike_c}*c</strong>`;
        document.querySelector(".windValue").innerHTML=`${i.current.wind_kph}Km/h`
        document.querySelector(".humValue").innerHTML=`${i.current.humidity}%`
        document.querySelector(".uvIndex p").innerHTML=`<strong>${i.current.uv}</strong>`;
        document.querySelector(".condition p").innerHTML=`<strong>${i.current.condition.text}</strong>`;
        
        document.querySelector(".aqi table").innerHTML=`<tr> <td><strong>CO</strong></td> <td>${i.current.air_quality.co}</td></tr> <tr> <td><strong>NO2</strong></td> <td>${i.current.air_quality.no2}</td></tr> <tr> <td><strong>O3</strong></td> <td>${i.current.air_quality.o3}</td></tr> <tr> <td><strong>SO2</strong></td> <td>${i.current.air_quality.so2}</td></tr> <tr> <td><strong>PM25</strong></td> <td>${i.current.air_quality.pm2_5}</td></tr> <tr> <td><strong>PM10</strong></td> <td>${i.current.air_quality.pm10}</td></tr> <tr> <td><strong>GB defra Index</strong></td> <td>${i.current.air_quality["gb-defra-index"]}</td></tr> <tr> <td><strong>US EPA index</strong></td> <td>${i.current.air_quality["us-epa-index"]}</td></tr>`
       
        document.querySelector(".dewPoint p").innerHTML=`<strong>${i.current.dewpoint_c}*c</strong>`;
        document.querySelector(".precip p").innerHTML=`<strong>${i.current.precip_mm}mm</strong>`;
        document.querySelector(".pressure p").innerHTML=`<strong>${i.current.pressure_mb}mBar</strong>`;

        document.querySelector(".progress").style.width=`${i.current.wind_kph}%`
        document.querySelector(".progress2").style.height=`${i.current.humidity}%`

        if(i.current.condition.text=="Mist"){
            document.querySelector(".condition").style.background='url(./img/_87524846_87524845.jpg) no-repeat center top/cover '
        }
        else if(i.current.condition.text=="Sunny"){
            document.querySelector(".condition").style.background='url(./img/SUMMER_sunWater.jpg) no-repeat center top/cover'
        }
    
        else if(i.current.condition.text=="Clear"){
            document.querySelector(".condition").style.background='url(./img/clear.avif) no-repeat center '
        }
        else if(i.current.condition.text=="Partly Cloudy"){
            document.querySelector(".condition").style.background='url(./img/partlyCloud.jpg) no-repeat center top/cover'
        }
        else if(i.current.condition.text=="Light rain"){
            document.querySelector(".condition").style.background='url(./img/lightrain.jpeg) no-repeat center top/cover'
        }
        else if(i.current.condition.text=="Overcast"){
            document.querySelector(".condition").style.background='url(./img/overcast.jpeg) no-repeat  top/cover'
        }
        
    

    })

})
