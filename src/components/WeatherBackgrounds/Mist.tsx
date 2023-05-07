import styles from './Mist.module.css'

type Props = {
    children: React.ReactNode
}

export default function Mist(props: Props) {
    return (
        <div className={styles.mist}>
            {props.children}
        </div>
    )
}