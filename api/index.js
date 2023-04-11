import axios from "axios";
import { RapidAPI_KEY } from "../api_keys";



export const getPlacesData = async (bl_lat, bl_long, tr_lat, tr_long, type) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : '11.847676',
                    tr_latitude: tr_lat ? tr_lat : '12.838442',
                    bl_longitude: bl_long ? bl_long : '109.095887',
                    tr_longitude: tr_long ? tr_long : '109.149359',
                    restaurant_tagcategory_standalone: '10591',
                    restaurant_tagcategory: '10591',
                    limit: '30',
                    currency: 'USD',
                    open_now: 'false',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': RapidAPI_KEY,
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            }
        );
        return data;

    } catch (error) {
        return null;
    }
}

