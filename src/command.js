
export const getResponse = async (location) => {
    const maxRetries = 3;
    let currentRetry = 0;
    let isLoading = true;

    while (currentRetry < maxRetries) {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a733914831544ebe96e154016230311&q=${location}&days=3&aqi=no&alerts=no`);
            const convert = await response.json();
            isLoading = false; // Set loading to false on successful fetch
            return convert;
        } catch (error) {
            console.error("Error in getResponse:", error);
            currentRetry++;
        }
    }

    // If all retries fail, you might want to handle it here
    console.error("Max retries reached. Unable to fetch data.");
    isLoading = false; // Set loading to false if max retries are reached without success
    return null; // or throw an error, or return a default value
};

export const forAsideTag = async (allTag, location, celOrpara) => {
    const Responses = await getResponse(location);
    console.log(allTag);
    allTag[2].innerHTML = Responses.location.name; //h3 in aside header
    allTag[4].innerHTML = Responses.current.condition.text; // paragraph in aside header
    allTag[5].src = Responses.current.condition.icon; // img in aside header 
    allTag[7].innerHTML = `${Responses.current.temp_c}${celOrpara}`
}

function displayLoading(Loading){
    if(Loading === true){

    }
}

export function celORFahra(allTag, location, chck){
    const celcius = '°C'
    const fahrenheit = '°F'
    if(chck === true){
        forAsideTag(allTag, location, celcius);
    }
    else{
        forAsideTag
    }
}








