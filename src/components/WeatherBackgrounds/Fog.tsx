import styles from './Fog.module.css'

type Props = {
    children: React.ReactNode
}

export default function Fog(props: Props) {
    return (
        <div className={styles.fog}>
            {props.children}
        </div>
    )
}