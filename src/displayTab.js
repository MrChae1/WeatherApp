import './sass/mainStyle.scss';
import { getResponse, TrueOrFalse } from './api';


const getData = async (location) => {
    const response = await getResponse(location);
    return response;
}
export function DisplayAll(location, sectionHeader){
    const FromSHeader = Array.from(sectionHeader.querySelectorAll('*'));
    getData(location).then((res) =>{
        console.log(res);
        FromSHeader[0].innerHTML = res.location.name;
        FromSHeader[2].src = res.current.condition.icon;
        FromSHeader[3].innerHTML = res.current.condition.text;
    });
}
