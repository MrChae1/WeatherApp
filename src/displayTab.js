import './sass/mainStyle.scss';
import { getResponse, TrueOrFalse } from './api';


const getData = async (location) => {
    const response = await getResponse(location);
    return response;
}
export function DisplayAll(location, sectionDesc){
    getData(location).then((res) =>{
        console.log(res);
        for(let i = 0; i < sectionDesc.length; i++){
            let newDesc = Array.from(sectionDesc[i].querySelectorAll('*'));

            newDesc[2].innerHTML = res.location.name; //Location Name
            newDesc[5].src = res.forecast.forecastday[i].day.condition.icon;
            newDesc[6].innerHTML = res.forecast.forecastday[i].day.condition.text;
        }
        
    });
}
            // newDesc[5].res.forecast.forecastday[i].day.condition.icon;
            // newDesc[6].res.forecast.forecastday[i].day.condition.text;
