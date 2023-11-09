
export const getResponse = async (location) => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a733914831544ebe96e154016230311&q=${location}&days=3&aqi=no&alerts=no`);
    const convert = await response.json();
    return convert;
}
export const forAsideTag = (allTag, Responses) => {
    allTag[2].innerHTML = Responses.location.name; //h3 in aside header
    allTag[4].innerHTML = Responses.current.condition.text; // paragraph in aside header
    allTag[5].src = Responses.current.condition.icon; // img in aside header
}




