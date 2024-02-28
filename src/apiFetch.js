import axios from "axios"

const ENDPOINT="https://crio-location-selector.onrender.com"

export const fetchCountry = async() => {
    try{
        const {data}= await axios.get(`${ENDPOINT}/countries`);
        //console.log(data)
        return data
    }
    catch(e){
        console.error(e)
    }
}
export const fetchState = async(country) => {
    console.log(country)
    try{
        const {data}= await axios.get(`${ENDPOINT}/country=${country}/states`);
        
        return data
    }
    catch(e){
        console.error(e)
    }

}
export const fetchCity = async(country,state) => {
    //console.log(country)
    try{
        const {data}= await axios.get(`${ENDPOINT}/country=${country}/state=${state}/cities`);
        
        return data
    }
    catch(e){
        console.error(e)
    }
}