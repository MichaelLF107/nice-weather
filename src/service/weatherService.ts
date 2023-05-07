import axios from 'axios'

const OpenWeatherApiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_APIKEY
const MapQuestApeKey = process.env.NEXT_PUBLIC_MAP_QUEST_APIKEY

const axiosWeater = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    timeout: 3000
})

const axiosGeo = axios.create({
    baseURL: 'http://www.mapquestapi.com/geocoding/v1',
    timeout: 3000
})

export const getWeatherByCoords = async (lat: number | null, lon: number | null) => {
    const { data } = await axiosWeater.get('/forecast', {
        params: {
            lat,
            lon,
            units: 'metric',
            appid: OpenWeatherApiKey
        },
    })
    const filteredData = data.list.filter((item: any, index: number) => {
        return index % 8 === 0
    })
    return {list: filteredData, city: data.city, cod: data.cod}
}

export const getCoordsByCity = async (city: string) => {
    const { data } = await axiosGeo.get('/address', {
        params: {
            key: MapQuestApeKey,
            location: city
        },
    })
    return data
}
