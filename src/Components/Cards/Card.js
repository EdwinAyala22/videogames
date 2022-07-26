import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './card.css';


const CardApp = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="m-5 text-center">
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="buttonCard" >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardApp;
