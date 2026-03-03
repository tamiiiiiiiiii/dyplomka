import React from "react";
import styles from "./AboutUs.module.css"

function AboutUs() {

    return (
        <>
            <section className={styles.about}>
                <h1>
                    Почему мы?
                </h1>
                <p>
                    В современном мире мы всё чаще сталкиваемся со стрессом, тревогой, эмоциональным выгоранием и внутренним напряжением. Постоянная спешка, давление ожиданий и нехватка поддержки могут незаметно накапливаться и влиять на качество жизни. Mental Health — это пространство, где психическое здоровье становится приоритетом, а помощь — доступной и понятной.
                </p>
                <div className={styles.AboutCards}>
                    <div className={styles.AboutCard}>
                        <h3>Более 10k+ </h3>
                        <p>Положительных отзывов</p>
                    </div>
                    <div className={styles.AboutCard}>
                        <h3>Около 20k+ </h3>
                        <p>Довольных клиентов</p>
                    </div>
                    <div className={styles.AboutCard}>
                        <h3>Связь </h3>
                        <p>24/7 с клиентами</p>
                    </div>
                </div>
            </section>
            <section className={styles.about2}>
                <div className={styles.about2cardbox}>
                    <div className={styles.about2Header}>
                        <h2>Что мы можем?</h2>
                        <div className={styles.about2box}>
                            <p className={styles.about2smallText}>
                                В Mental Health мы помогаем людям лучше понимать себя, справляться с внутренними трудностями и выстраивать более устойчивую и гармоничную жизнь. Наша работа направлена не только на решение конкретных проблем, но и на укрепление психологического благополучия в целом.
                            </p>
                        </div>
                    </div>

                    <div className={styles.about2box}>
                        <div className={styles.about2Card}>
                            <h3>Безопасные условия</h3>
                            <p>
                                Мы создаём комфортное и доверительное пространство, где можно говорить открыто и быть собой. Конфиденциальность, уважение и отсутствие осуждения — основа нашей работы.
                            </p>
                        </div>

                        <div className={styles.about2Card}>
                            <h3>Подход</h3>
                            <p>
                                Мы работаем на основе современных и научно обоснованных методов психологии. В центре нашей работы — личность человека, его чувства, опыт и индивидуальные потребности.
                            </p>
                        </div>

                        <div className={styles.about2Card}>
                            <h3>Поддержка</h3>
                            <p>
                                Мы сопровождаем вас на пути к внутреннему балансу, помогая справляться с трудными эмоциями, жизненными кризисами и внутренними конфликтами.
                            </p>
                        </div>

                        <div className={styles.about2Card}>
                            <h3>Результат</h3>
                            <p>
                                Наша цель — не просто решить проблему, а помочь выстроить устойчивое психологическое благополучие, улучшить качество жизни и укрепить внутреннюю опору.
                            </p>
                        </div>


                    </div>

                    <div className={styles.about2span}>
                        <span>Комфорт</span>
                        <span>Подход</span>
                        <span>Помощь</span>
                    </div>
                </div>
            </section>

        </>
    );
}

export default AboutUs;

