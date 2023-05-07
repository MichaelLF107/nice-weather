import styles from './Sand.module.css'

type Props = {
    children: React.ReactNode
}

export default function Sand(props: Props) {
    return (
        <div className={styles.sand}>
            {props.children}
        </div>
    )
}