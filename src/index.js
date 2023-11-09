import './sass/mainStyle.scss';
import { getResponse, forAsideTag} from './command';

document.addEventListener('DOMContentLoaded', () =>{
  const defaultLocation = 'bulacan';

  function mainComponent(){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainContainer');
    
    //Header
    const headerFunction = () => {
      const headerTag = document.createElement('header');
      headerTag.classList.add('headerTag');
      const logoTitle = document.createElement('section');
      logoTitle.classList.add('logoTitle');
      logoTitle.innerHTML = `
        <svg class="weatherLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunny-alert</title><path d="M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56M19,13V7H21V13H19M19,17V15H21V17" /></svg>
        <h1>Weather or Not</h1>
      `;
      const inputContainer = document.createElement('nav');
      inputContainer.classList.add('inputContainer');
      inputContainer.innerHTML = `
        <input type="text" id="input-el" class="nav-Input" placeholder="What's your Location?">
        <button id="find-btn" class="nav-btn">Find</button>
      `;
      headerTag.append(logoTitle, inputContainer);
      return headerTag;
    }

    const mainSection = () => {
      const insideMain = document.createElement('div');
      insideMain.classList.add('insideSection');
      insideMain.innerHTML = `
        <aside class="mainAside">
          <header class="aside-header">
            <div class="aside-title">
              <h3 class="user-location"></h3>
            </div>
            <div class="cloud-formation">
              <p class="condition-desc"></p>
              <img class="Today-weather" src="" alt="">
            </div>
          </header>
          <article class="aside-article">
            <h2 class="temp-container">83°F</h2>
            <div class="inside-article">
              <p class="humidity">Humidity:<span class="humidity-span"> 88°F</span></p>
              <p class="feelsLike">Feels Like:<span class="feels-span"> 27.4%</span></p>
              <p class="Wind">Wind:<span class="wind-span"> 340°C</span></p>
              <p class="Pressure">Pressure:<span class="pressure-span"> 1012hPsa</span></p>
            </div>
          </article>
        </aside>  
        <section class="mainSection">
        </section>
      `;

      const mainAside = insideMain.querySelector('aside');
      const allTag = Array.from(mainAside.querySelectorAll('*'));
      // const userLocation = mainAside.querySelector('.user-location');
      // const Weathercondition = mainAside.querySelector('.condition-desc');
      // const 
      async function runAll(){
        const Responses = await getResponse(defaultLocation);
        forAsideTag(allTag, Responses);
      }
  
      runAll();

      return insideMain;
    }

    
    


    mainContainer.append(headerFunction(), mainSection());
    return mainContainer
  }

  document.body.appendChild(mainComponent());

  
});

