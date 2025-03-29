let temprature = document.getElementById("tempr")
let humidity = document.getElementById("humiditey")
let clouds = document.getElementById("weatherinfo")
let winds = document.getElementById("windinfo")
let input1 = document.getElementById("searcinput")
let icons = document.getElementById("sicon")

let cityName

function city(var1) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${var1}&appid=756a8a3e92ea8335eed64111886f46aa&units=metric`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)

      temprature.innerText = ""
      temprature.classList.add("temp")

      let mainheading = document.createElement("h2")
      mainheading.innerText = "Temprature"

      mainheading.classList.add("heading")
      
     let theading = document.createElement("h3")
     let para1 = document.createElement("p")
     para1.innerText = "Feels Like" + response.main.feels_like + "°C"
     console.log(theading)
     theading.innerText = response.main.temp + "°C"
     console.log(theading)
     let para2 = document.createElement("p")
     para2.innerText = "Minimum Temp " + response.main.temp_min + "°C"
     temprature.append(mainheading,theading, para1, para2)


    //  contnue whatever you want

    clouds.innerText = ""
    clouds.classList.add("temp")
      let mainheading1 = document.createElement("h2")
      mainheading1.innerText = "Weather Info"
      mainheading1.classList.add("heading")
    let theading1 = document.createElement("h3")
    theading1.innerText = response.weather[0].description

    let cloudsinfo = document.createElement("h4")

    cloudsinfo.innerText = response.weather[0].main

    

    clouds.append(mainheading1, theading1, cloudsinfo)


    // humidity starts here

humidity.innerText = ""
humidity.classList.add("temp")

    let mainheading2 = document.createElement("h2")
    mainheading2.innerText = "Humidity Info"
    mainheading2.classList.add("heading")

      let heading5 = document.createElement("h3")
    heading5.innerText = "visibility" + response.visibility

    console.log(response.visibility)

    let para3 = document.createElement("p")
    para3.innerText = "Humidity is " + response.main.humidity + "%"
    humidity.append(mainheading2, heading5, para3)
// wind info starts here

winds.innerText = ""
winds.classList.add("temp")

    let mainheading3 = document.createElement("h2")
    mainheading3.innerText = "Wind Info"
    mainheading3.classList.add("heading")

    let mainheading4 = document.createElement("h3")
    
    mainheading4.innerText = response.wind.speed + "KM/h"


    let para4 = document.createElement("p")
    para4.innerText = "Wind degree is " + response.wind.deg
    winds.append(mainheading3, mainheading4, para4)




    
    })
    .catch((err) => {console.log(err)
    temprature.innerText = "Data is not available"
    winds.innerText = "Data is not available"
    humidity.innerText = "Data is not available"
    clouds.innerText = "Data is not available"
    }
  
  );

}
input1.addEventListener('keydown', function(event){

  if (event.key === 'Enter')
  {
    if(input1.value == "")
    {
      alert("Please Enter something")
    }
    else{

    cityName = input1.value

    city(cityName)

    }
     
  }
})

icons.addEventListener('click', function(){
  if(input1.value == "")
    {
      alert("Please Enter something")
    }
    else{

    cityName = input1.value

    city(cityName)

    }
 
})



