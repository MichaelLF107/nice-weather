import ClearSky from './ClearSky'
import Clouds from './Clouds'
import Fog from './Fog'
import Mist from './Mist'
import Rain from './Rain'
import Snow from './Snow'
import Sand from './Sand'
import Thunderstorm from './Thunderstorm'

type Props = {
    children: React.ReactNode
    weather: string
}

export default function WeatherBackground(props: Props) {
    const { weather } = props

    switch (weather) {
        case 'Clouds':
            return <Clouds>{props.children}</Clouds>
        case 'Fog':
            return <Fog>{props.children}</Fog>
        case 'Mist':
            return <Mist>{props.children}</Mist>
        case 'Rain':
            return <Rain>{props.children}</Rain>
        case 'Snow':
            return <Snow>{props.children}</Snow>
        case 'Sand':
            return <Sand>{props.children}</Sand>
        case 'Thunderstorm':
            return <Thunderstorm>{props.children}</Thunderstorm>
        default:
            return <ClearSky>{props.children}</ClearSky>
    }
}