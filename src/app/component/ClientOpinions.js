// components/ClientOpinions.js
import React from "react";
import styles from "./ClientOpinions.module.css";

const ClientOpinions = () => {
  const testimonials = [
    {
      name: "Jonathan Sweeney",
      text: "I love that model. I used to have to call all around, and I absolutely love that model that you could save me time and headache of doing that.",
      avatar: "/avatar1.png",
    },
    {
      name: "Barbara Cook",
      text: "I am so happy with your company. Ever since my insurer switched to you, everything and everybody I’ve spoken to has been extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!",
      avatar: "/avatar2.png",
    },
    {
      name: "Mary Rogers",
      text: "I just want to thank you for the great job you did during my transition to agency. You unraveled all the confusion and the new company is wonderful.",
      avatar: "/avatar3.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Clients Opinions</h2>
      <div className={styles.slider}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.card} key={index}>

            <img
              src="/images/person.png"
              alt={`${testimonial.name} Avatar`}
              className={styles.avatar}
            />
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <span className={styles.dot} key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default ClientOpinions;
