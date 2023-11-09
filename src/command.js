
export const getResponse = async (location) => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a733914831544ebe96e154016230311&q=${location}&days=3&aqi=no&alerts=no`);
    const convert = await response.json();
    return convert;
}

export const displayAll = async(location) => {
    const Responses = await getResponse(location);
    return Responses;
}

// export const displayLocation = async () => {
//     const location = await 
//     const getlocation = location.location
    
// }