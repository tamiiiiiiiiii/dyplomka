import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Price.module.css";

const tickets = [
  { id: 1, name: "Индивидуальная консультация", price: "10 000₸", time: "1 час", format: "онлайн/оффлайн" },
  { id: 2, name: "Семейная консультация", price: "12 000₸", time: "1-2 часа", format: "онлайн/оффлайн" },
  { id: 3, name: "Групповая консультация", price: "14 000₸", time: "1-2.30 часа", format: "оффлайн" },
  { id: 4, name: "Кризисная консультация", price: "18 000₸", time: "2 часа", format: "оффлайн" },
];

const Prices = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.Prices}>
      <h1 className={styles.pricesText}>Сеансы</h1>
      <p className={styles.pricesSmallText}>
        На сеансах вас ждёт бережная и профессиональная поддержка в индивидуальном, групповом и семейном формате,
        а также кризисная помощь. Мы помогаем разобраться в чувствах, улучшить взаимодействие с близкими и найти
        решения в вопросах развития и обучения в комфортной и безопасной атмосфере.
      </p>

      <div className={styles.cards3box}>
        {tickets.map((ticket) => (
          <div key={ticket.id} className={styles.card}>
            <h3>{ticket.name}</h3>
            <p>{ticket.price}</p>
            <p>{ticket.time}</p>
            <p>{ticket.format}</p>
            <button className={styles.button} onClick={() => navigate("/contacts")}>
              Записаться
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
