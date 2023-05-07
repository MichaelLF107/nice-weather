import styles from './Snow.module.css'

type Props = {
    children: React.ReactNode
}

export default function Snow(props: Props) {
    return (
        <div className={styles.snow}>
            {props.children}
        </div>
    )
}