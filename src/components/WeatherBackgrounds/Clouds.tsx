import styles from './Clouds.module.css'

type Props = {
    children: React.ReactNode
}

export default function Clouds(props: Props) {
    return (
        <div className={styles.clouds}>
            {props.children}
        </div>
    )
}