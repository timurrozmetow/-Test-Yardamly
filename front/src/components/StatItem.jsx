import React, { useState, useEffect, useRef } from "react";
import "./styles/WhoWeAre.css";

const StatItem = ({ value, label }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Если элемент виден, запускаем анимацию
        }
      },
      { threshold: 0.5 } // Половина блока должна быть видна
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Если блок не виден, не запускаем анимацию

    let start = 0;
    const duration = 2000; // Продолжительность анимации (2 секунды)
    const increment = value / (duration / 50); // Шаг увеличения

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCurrentValue(value); // Установить конечное значение
        clearInterval(timer); // Остановить таймер
      } else {
        setCurrentValue(Math.floor(start)); // Обновить текущее значение
      }
    }, 50); // Интервал обновления 50 мс

    return () => clearInterval(timer); // Очистить таймер при размонтировании
  }, [isVisible, value]);

  return (
    <div className="stat-item" ref={ref}>
      <h3>{currentValue}</h3>
      <p>{label}</p>
    </div>
  );
};

export default StatItem;
