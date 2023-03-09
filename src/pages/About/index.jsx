import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Header } from "../../components";
import Logo from '../../assets/logo.png';

export default function About() {
  return (
    <>
      {/* Header */}
      <Header>
        <h1 className="display-5 fw-bolder text-white mb-2">About</h1>
        <p className="lead text-white-50 mb-4">
          Disini menjelaskan tentang company profile dan struktur organisasi dan
          juga tujuan dari website ini
        </p>
      </Header>
      {/* END Header */}

      <section className="py-5 border-bottom">
        <Container className="px-5 my-5">
            <h1>About Genshin Impact</h1>
            <Row className="my-5">
              <Col md={6}>
                <Image src={Logo} alt="Genshin Impact logo" fluid />
              </Col>
              <Col md={6}>
                <p>
                  Genshin Impact is a free-to-play action role-playing game developed and published by miHoYo. The game is set in the world of Teyvat, where the player takes on the role of a traveler searching for their lost sibling. Along the way, the player will encounter various companions who join them on their journey, and together they will uncover the mysteries of Teyvat.
                </p>
                <p>
                  The game was released on September 28, 2020 for Microsoft Windows, PlayStation 4, Nintendo Switch, iOS, and Android. Genshin Impact has received critical acclaim for its open-world design, graphics, and music, as well as its gacha mechanics and multiplayer features.
                </p>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <h2>Gameplay</h2>
                <p>
                  Genshin Impact features an open-world environment that the player can freely explore, with various locations to discover and enemies to defeat. The player can control up to four characters at a time, each with their own unique abilities and elemental powers. By using these abilities, the player can solve puzzles, defeat enemies, and navigate the game world.
                </p>
                <p>
                  The game also features a gacha system, where players can spend in-game currency or real money to obtain new characters, weapons, and other items. Genshin Impact also includes multiplayer features, allowing players to team up with friends to complete quests and take on tougher challenges.
                </p>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <h2>Development</h2>
                <p>
                  Genshin Impact was developed and published by miHoYo, a Chinese video game company. The game was first announced in June 2019, and was released on September 28, 2020 for multiple platforms.
                </p>
                <p>
                  The development team drew inspiration from various sources, including the Legend of Zelda series and the anime film Your Name. The game's art style was also heavily influenced by the works of Studio Ghibli.
                </p>
              </Col>
            </Row>
        </Container>
      </section>

  
    </>
  );
}
