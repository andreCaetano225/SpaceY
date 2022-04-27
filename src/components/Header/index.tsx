/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.scss";

export const Header = () => {
    return (
        <>
            <div className={styles.headerAplication}>
                <img src="./logo.svg" alt="LogoProjeto" />
            </div>
        </>
    )
}