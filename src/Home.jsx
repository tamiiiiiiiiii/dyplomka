import React from "react";
import styles from "./Home.module.css";

function Home() {


    return (
        <section className={styles.section1} >
            <div style={{ position: "relative", zIndex: 1, pointerEvents: "auto" }}>
                <h1>Mental health</h1>
                <p>Поможем в любую минуту!</p>

                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h2>Онлайн и оффлайн сеансы</h2>
                    </div>

                    <div className={styles.card}>
                        <h2>Профессиональные психологи</h2>
                    </div>

                    <div className={styles.card}>
                        <h2>Найдем подход к любому</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
