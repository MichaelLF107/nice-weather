import styles from './Thunderstorm.module.css'

type Props = {
    children: React.ReactNode
}

export default function Thunderstorm(props: Props) {
    return (
        <div className={styles.thunderstorm}>
            {props.children}
        </div>
    )
}