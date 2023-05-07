import styles from './Rain.module.css'

type Props = {
    children: React.ReactNode
}

export default function Rain(props: Props) {
    return (
        <div className={styles.rain}>
            {props.children}
        </div>
    )
}