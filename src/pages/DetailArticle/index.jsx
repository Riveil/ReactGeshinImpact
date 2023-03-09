import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import {
  BsArrowRight,
  BsBuilding,
  BsCollection,
  BsToggles2,
} from "react-icons/bs";
import Logo from '../../assets/logo.png';
import Baal from '../../assets/baal.png';
import Enemy from '../../assets/enemy.png';
import Element from '../../assets/element.png';

import { Header } from "../../components";

export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  // const [dataImg, setData3] = useState([]);

  async function getCharacter() {
    try {
      const response = await axios.get("https://api.genshin.dev/characters");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    async function getCharacterData() {
      try {
        const newData = [];
        // const DataImg = [];
        for (let i = 0; i < data.length; i++) {
          const response = await axios.get(
            `https://api.genshin.dev/characters/${data[i]}`
          );
          // const responseImg = await axios.get(`https://api.genshin.dev/characters/${data[i]}/card`);
          newData.push(response.data);
          // DataImg.push(responseImg.data);
        }

        setData2(newData);
        // setData3(DataImg);
      } catch (error) {
        console.error(error);
      }
    }

    if (data.length > 0) {
      getCharacterData();
    }
  }, [data]);

  return (
    <>
      {/* Header */}
      <Header>
        <img src={Logo} style={{height :400, width: 1000}}/>
        <p className="lead text-white-50 mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world's most popular front-end open source toolkit!
        </p>
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <Button
            variant="outline-light"
            size="lg"
            href="https://autopatchhk.yuanshen.com/client_app/download/launcher/20230216150617_fwQwPofKd7bZ7nRG/GenshinImpact_install_20230215193328.exe"
          >
            Download PC Version
          </Button>
          <Button
            variant="outline-light"
            size="lg"
            href="https://genshin.hoyoverse.com/id/"
            target="_blank"
          >
            Official Page
          </Button>
        </div>
      </Header>

      {/* Section */}
      <section className="py-5 border-bottom" id="features">
        <Container className="px-5 my-5">
        <div className="text-center mb-5">
            <h2 className="fw-bolder">Our Features</h2>
          </div>
          <Row className="gx-5">
            <Col lg={4} className="mb-5 mb-lg-0">
              <img src={Baal} width="100%" height="300px" alt="" />
              <h2 className="h4 fw-bolder text-center">Many Character</h2>
              <p>
                Many characters you can play in this game
              </p>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
            <img src={Enemy} width="100%" height="300px" alt="" />
              <h2 className="h4 fw-bolder text-center">Many Enemy</h2>
              <p>
              Many enemy you can againts in this game
              </p>
            </Col>
            <Col lg={4}>
            <img src={Element} width="100%" height="300px" alt="" />
              <h2 className="h4 fw-bolder text-center">Many Element</h2>
              <p>
              Many element you can use and combo in this game
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Article */}
      <section className="bg-light py-5 border-bottom">
        <Container className="px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Genshin Impact Characters</h2>
          </div>
          <Row className="gx-5 justify-content-center">
            {data2?.slice(4, 7).map((item, i) => (
              <Col key={item.name} lg={6} xl={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://api.genshin.dev/characters/${
                      data[i + 4]
                    }/card`}
                  />
                  <Card.Body style={{ height: 180 }}>
                    <Card.Title>
                      <b>{item.name}</b>
                    </Card.Title>
                    <Card.Title>{}</Card.Title>
                    <Card.Text
                      style={{
                        WebkitLineClamp: 3,
                        lineClamp: 3,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className="d-grid">
                      <Button
                        href={`/articles/detail/${data[i + 4]}`}
                        variant="outline-primary"
                      >
                        Go somewhere
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
