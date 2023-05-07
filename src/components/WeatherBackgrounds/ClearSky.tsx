import styles from './ClearSky.module.css'

type Props = {
    children: React.ReactNode
}

export default function ClearSky(props: Props) {
    return (
        <div className={styles.clearSky}>
            {props.children}
        </div>
    )
}