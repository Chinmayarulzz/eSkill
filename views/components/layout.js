import styles from "../styles/demo.module.css";

export default function Layout( {children} ){
    return(
        <div className={styles.container}>{children}</div>
    );
}