"use client"

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { getWeatherByCoords, getCoordsByCity } from '@/service/weatherService'
import { TextField, Button, CircularProgress } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import WeatherCard from '@/components/WeatherCard/WeatherCard'

type Coordinates = {
  accuracy: number | null
  altitude: number | null
  altitudeAccuracy: number | null
  heading: number | null
  latitude: number | null
  longitude: number | null
  speed: number | null
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function formatDate(date: string) {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear()
  const hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month
  const formattedHours = hours % 12 ? hours % 12 : 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  return `${formattedDay}/${formattedMonth}/${year} - ${formattedHours}:${formattedMinutes}${ampm}`
}

export default function Home() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({} as any)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const weatherData = await getWeatherByCoords(position.coords.latitude, position.coords.longitude)
        setWeather(weatherData)
        setCity(weatherData.city.name)
        setLoading(false)
      })
    }
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <main className={styles.main}>
        <div className={styles.citySelector}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={async () => {
              setLoading(true)
              let coords = await getCoordsByCity(city)
              coords = coords.results[0].locations[0].latLng
              const weatherData = await getWeatherByCoords(coords.lat, coords.lng)
              setWeather(weatherData)
              setLoading(false)
            }}
          >
            Get Weather
          </Button>
        </div>
        {!loading ? (
          <div className={styles.list}>
            {weather.list.map((item: any) => (
              <div key={item.dt} className={styles.item}>
                <WeatherCard
                  main={item.main}
                  name={weather.city.name}
                  rain={item.rain}
                  weather={item.weather}
                  wind={item.wind}
                />
                <span className={styles.date}>
                  <CalendarMonthIcon fontSize="inherit" />
                  {formatDate(item.dt_txt)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        )}
      </main>
    </ThemeProvider>
  )
}
