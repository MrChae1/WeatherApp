import './sass/mainStyle.scss';
import { getResponse, TrueOrFalse } from './api';


const getData = async (location) => {
    const response = await getResponse(location);
    return response;
}
export function DisplayAll(location, sectionDesc, articleHeader){
    getData(location).then((res) =>{
        for(let i = 0; i < sectionDesc.length; i++){
            let newDesc = Array.from(sectionDesc[i].querySelectorAll('*'));
            articleHeader.innerHTML = res.location.name; //Location Name
            newDesc[1].innerHTML = res.forecast.forecastday[i].date;
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

