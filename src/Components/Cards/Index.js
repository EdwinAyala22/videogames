import React from "react";
import CardApp from "./Card";
import { Container } from "react-bootstrap";
import imgCard1 from "../Assets/img/imgCard1.jpg";
import imgCard2 from "../Assets/img/imgCard2.jpg";
import imgCard3 from "../Assets/img/imgCard3.jpg";

const cards = [
  {
    id: 1,
    title: "Minecraft",
    image: imgCard1,
    text: "Explora mundos infinitos y construye toda clase de cosas, desde la casa más simple hasta el castillo más grandioso. Juega en modo creativo con recursos ilimitados o extrae los materiales de las profundidades del mundo en el modo supervivencia, fabricando armas y armaduras para defenderte de las criaturas peligrosas. Crea, explora y sobrevive solo o con amigos desde dispositivos móviles o Windows 10.",
  },
  {
    id: 2,
    title: "Assassin's Creed",
    image: imgCard2,
    text: "es un galardonado videojuego de ficción histórica en tercera persona, de sigilo, acción, aventura y mundo abierto desarrollado por Ubisoft Montreal para Microsoft Windows, PlayStation 3 y Xbox 360. La mayor parte del juego tiene lugar durante la Tercera Cruzada en Tierra Santa y la trama gira en torno a una secta conocida como la Orden Secreta de Hashshashin (Asesinos).",
  },
  {
    id: 2,
    title: "Battlefield",
    image: imgCard3,
    text: "",
  },
];

const CardsApp = () => {
  return (
    <Container className="d-flex justify-content-center flex-wrap">
      {cards.map((card) => (
        <CardApp key={card.id} title={card.title} imageSrc={card.image} />
      ))}
    </Container>
  );
};

export default CardsApp;
