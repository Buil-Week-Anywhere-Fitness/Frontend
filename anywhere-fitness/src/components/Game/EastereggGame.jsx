import React, { useState } from "react";
import { Button, Card, Container, Header } from "semantic-ui-react";
import "./easteregg.css";

export default function Game() {
  const [count, setCount] = useState(0);

  function clickJump(e) {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    console.log(`jumped ${1 + count} times`);
    let character = document.getElementById("character");
    let block = document.getElementById("block");
    //console.log(`looking for ${character}`) //this is for debugging
    if (character.classList !== "animate") {
      character.classList.add("animate");
    }
    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);

    //checks if hit
    setInterval(function () {
      let characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
      );

      let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
      );

      if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        alert("caught");
        window.location.reload();
      }
    }, 10);
  }

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <Container text textAlign="center">
      <Card fluid>
        <Card.Content>
          <Header as="h2">Sorry, that isn't a valid route</Header>
          <div id="game">
            <div id="character"></div>
            <div id="block"></div>
            <div id="clickToStarttWrapper">You jumped {count} times.</div>
          </div>
        </Card.Content>
        <Card.Content>
          <div className="ui two buttons">
            <Button onClick={clickJump} basic color="green">
              Click to jump!
            </Button>
            <Button onClick={goHome} basic color="red">
              Go Home
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Container>
  );
}
