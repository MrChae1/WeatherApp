import './sass/mainStyle.scss';
function MainComponent(){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainContainer');

    const headerTag = () => {
        const mainHeader = document.createElement('header');
        mainHeader.classList.add('mainHeader');
        mainHeader.innerHTML = `
            <div class="headerSection">
                <svg class="title-Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunny-alert</title><path d="M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56M19,13V7H21V13H19M19,17V15H21V17" /></svg>
                <h1>Weather or Not</h1>
            </div>
        `;
        const headerNav = document.createElement('nav');
        headerNav.innerHTML = `
            <input type="text" class="input-nav" placeholder="What's your Location?">
            <button class="find-btn">Find</button>
        `;
        mainHeader.appendChild(headerNav);
        return mainHeader
    }

    const sectionTag = () => {
        const mainSection = document.createElement('section');
        const sectionHeader = document.createElement('div');
        sectionHeader.classList.add('sectionHeader');
        sectionHeader.innerHTML = `
            <h3></h3>
            <div class="Weather-Desc">
                <img class="weather-img" src="" alt="">
                <p class="weather-para"></p>
            </div> 
        `;
        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = `
            <h2></h2>
            <article>
                <p>HUMIDITY: <span class="Humidity"></span></p>
                <p>WIND: <span class="Wind"></span></p>
                <p>FEELS LIKE: <span class="feelsLike"></span></p>
                <p>VISIBILITY: <span class="visibility"></span></p>
            </article>
        `;
        const sectionAside = document.createElement('aside');
        const UnitTemp = document.createElement('button');
        UnitTemp.innerHTML = `°C / °F`;
        sectionAside.appendChild(UnitTemp);


        mainSection.append(sectionHeader, sectionDiv, sectionAside);
        return mainSection;
    }

    mainContainer.append(headerTag(), sectionTag());
    return mainContainer
    
}

document.body.appendChild(MainComponent());