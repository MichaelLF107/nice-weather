import styles from './styles.module.css'
import WeatherBackground from '../WeatherBackgrounds/WeatherBackground'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import CloudIcon from '@mui/icons-material/Cloud'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LensBlurIcon from '@mui/icons-material/LensBlur'
import GrainIcon from '@mui/icons-material/Grain'
import AirIcon from '@mui/icons-material/Air'
import Lightning from '../../assets/lightning.svg'
import Image from 'next/image'

type weather = {
    description: string
    icon: string
    id: number
    main: string
}

type Props = {
    main: {
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_max: number
        temp_min: number
    }
    name: string
    rain: { '3h': number }
    weather: weather[]
    wind: {
        deg: number
        gust: number
        speed: number
    }
}

function getWeatherIcon(weather: weather) {
    switch (weather.main) {
        case 'Rain':
            return <WaterDropIcon fontSize='inherit' />
        case 'Clear':
            return <WbSunnyIcon fontSize='inherit' />
        case 'Snow':
            return <AcUnitIcon fontSize='inherit' />
        case 'Thunderstorm':
            return <Image src={Lightning} alt='Lightning' width={24} height={24} />
        case 'Clouds':
            return <CloudIcon fontSize='inherit' />
        case 'Drizzle':
            return <WaterDropIcon fontSize='inherit' />
        case 'Mist':
            return <WaterDropIcon fontSize='inherit' />
        case 'Fog':
            return <LensBlurIcon fontSize='inherit' />
        case 'Sand':
            return <GrainIcon fontSize='inherit' />
        default:
            return null
    }
}

export default function WeatherCard(props: Props) {
    const { main, name, rain, weather, wind } = props

    return (
        <WeatherBackground weather={weather[0].main}>
            <div className={styles.header}>
                <div className={styles.city}>
                    <LocationOnIcon fontSize='inherit' />
                    {name}
                </div>
                <div className={styles.temp}>
                    {main.temp}°C
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.weather}>
                <div className={styles.description}>
                    <div className={styles.detailTitle}>Feels like:</div>
                    <div className={styles.detailValue}>{Math.round(main.feels_like)}°C</div>
                </div>
                <div className={styles.description}>
                    {getWeatherIcon(weather[0])}
                    {`${weather[0].main} - ${weather[0].description}`}
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.details}>
                <div className={styles.detail}>
                    <div className={styles.detailTitle}>Humidity:</div>
                    <div className={styles.detailValue}>{main.humidity}%</div>
                </div>
                <div className={styles.detail}>
                    <div className={styles.detailTitle}>Rain:</div>
                    <div className={styles.detailValue}>{rain ? rain['3h'] : 0} mm</div>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.detail}>
                    <AirIcon fontSize='inherit' />
                    <div className={styles.detailTitle}>Wind:</div>
                    <div className={styles.detailValue}>{wind.speed} m/s</div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.detail}>
                    <div className={styles.detailTitle}>Pressure:</div>
                    <div className={styles.detailValue}>{main.pressure} hPa</div>
                </div>
            </div>
        </WeatherBackground>
    )
}