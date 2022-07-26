import React from 'react';
import { Container } from 'react-bootstrap';

const TextoApp = () => {
  return (
    <Container>
        <h2 className='m-3 p-2 text-center fw-bold'>VIDEO GAMES</h2>
        <p className='m-2 p-2 text-center text-secondary'>Los videojuegos son programas informáticos o software cuya principal función es 
        constituir un medio de entretenimiento para el o los usuarios. Los videojuegos además pueden presentar 
        otros objetivos como la educación, hacer ejercicio o narrar historias pero siempre teniendo como base 
        al entretenimiento y esto deriva de la concepción de los videojuegos como una forma de juego. De este 
        modo existen programas informáticos que se asemejan en casi todos los aspectos a un videojuego pero que 
        no lo son realmente porque están desempeñados con una intencionalidad distinta. Unos de los casos mas 
        ejemplares son los simuladores de realidad virtual, que aunque se controlan y tienen objetivos similares 
        o idénticos a los videojuegos, se diseñan como programas de entrenamiento y adiestramiento de personas 
        para su desempeño en la vida real y no como juegos o formas de entretenimiento.</p>
    </Container>
  )
}

export default TextoApp