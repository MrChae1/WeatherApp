import './sass/mainStyle.scss';
import { getResponse } from './api';

let isLoading = true;

const getData = async (location) => {
    const response = await getResponse(location);
    isLoading = false;
    return response;
}
export function DisplayAll(location, sectionDesc, articleHeader, mainSection,modalDiv){
    Loading(mainSection, modalDiv);
    const dateDesc = ['TODAY', 'TOMORROW', 'NEXT DAY'];
    getData(location).then((res) =>{
        for(let i = 0; i < sectionDesc.length; i++){
            let newDesc = Array.from(sectionDesc[i].querySelectorAll('*'));
            articleHeader.innerHTML = res.location.name; //Location Name
            newDesc[1].innerHTML = dateDesc[i];
            newDesc[3].innerHTML = `${res.forecast.forecastday[i].day.avgtemp_c} °C`; //celsius/farah
            newDesc[4].src = res.forecast.forecastday[i].day.condition.icon; //Weather Images
            newDesc[5].innerHTML = res.forecast.forecastday[i].day.condition.text; //Weather description
            newDesc[8].innerHTML = res.forecast.forecastday[i].day.avghumidity; //Humidity
            newDesc[10].innerHTML = res.forecast.forecastday[i].day.maxwind_kph; //Wind
            newDesc[12].innerHTML = res.forecast.forecastday[i].day.daily_chance_of_rain;//feelsLike
            newDesc[14].innerHTML = res.forecast.forecastday[i].day.avgvis_km;//visibility
        }
    });
}

export function ChangeTemp(){
    
}

export const Loading = (mainSection, modalDiv) => {
    mainSection.style.display = 'grid';
    modalDiv.style.display = 'none';
}

