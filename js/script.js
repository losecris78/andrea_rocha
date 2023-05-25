/********************************************
date variables and declarations********************************/

let date = new Date;
let year = date.getFullYear();
let dateFormat = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(date);
let day = date.getDay()
/*console.log(day);*/
document.querySelector("#today").innerHTML=dateFormat;
document.querySelector("#year").innerHTML= year


/*******************************************
 * weather declarations***********************************/



// select HTML elements in the document
const currentTemp = document.querySelector('#today_weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url ='https://api.openweathermap.org/data/2.5/weather?q=curitiba&units=metric&appid=082c6f56cd719ed77501c3dc650ee635';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    imageUrl.innerHTML=`${icon}`;
  };

  /********************************************************
   * hamburguer button*********************************  */

  function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
  }
  const x= document.getElementById("hamburguerBtn")
  x.onclick= toggleMenu;

  