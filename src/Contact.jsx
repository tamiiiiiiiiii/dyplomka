import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSent, setIsSent] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (isSent) {
            setIsSent(false);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
    }

    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div className={styles.infoCard}>
                    <h1>Контакты</h1>
                    <p>
                        Оставьте заявку, и мы свяжемся с вами в ближайшее время.
                        Можно написать в форму или выбрать удобный способ связи ниже.
                    </p>

                    <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                            <span>Телефон</span>
                            <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                        </div>
                        <div className={styles.infoItem}>
                            <span>Email</span>
                            <a href="mailto:help@mentalhealth.com">help@mentalhealth.com</a>
                        </div>
                        <div className={styles.infoItem}>
                            <span>Адрес</span>
                            <p>г. Москва, ул. Примерная, 12</p>
                        </div>
                        <div className={styles.infoItem}>
                            <span>Время работы</span>
                            <p>Ежедневно, 09:00-21:00</p>
                        </div>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <h2>Связаться с нами</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="name">Имя</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ваша почта"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Коротко опишите ваш вопрос"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                        />

                        <button type="submit">Отправить</button>
                    </form>

                    {isSent && (
                        <p className={styles.successText}>
                            Спасибо! Ваша заявка отправлена.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
