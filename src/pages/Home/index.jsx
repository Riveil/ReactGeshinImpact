import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  BsArrowRight,
  BsBuilding,
  BsCollection,
  BsToggles2,
} from "react-icons/bs";

import { Header } from "../../components";

export default function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [dataImg, setData3] = useState([]);

  async function getPets() {
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
    getPets();
  }, []);

  useEffect(() => {
    async function getCharacterData() {
      try {
        const newData = [];
        const DataImg = [];

        for (let i = 0; i < data.length; i++) {
          const response = await axios.get(`https://api.genshin.dev/characters/${data[i]}`);
          const responseImg = await axios.get(`https://api.genshin.dev/characters/${data[i]}/card`);
          newData.push(response.data);
          DataImg.push(responseImg.data);
          
        }
        
        setData2(newData);
        setData3(DataImg);
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
            <h1 className="display-5 fw-bolder text-white mb-2">
              Present your business in a whole new way
            </h1>
            <p className="lead text-white-50 mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world's most popular front-end open source toolkit!
            </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <Button variant="primary" size="lg" href="https://autopatchhk.yuanshen.com/client_app/download/launcher/20230216150617_fwQwPofKd7bZ7nRG/GenshinImpact_install_20230215193328.exe">
                Unduh Versi PC
              </Button>
              <Button variant="outline-light" size="lg" href="https://genshin.hoyoverse.com/id/" target="_blank"> 
                Unduh Lainnya
              </Button>
            </div>
          </Header>
    
          {/* Section */}
          <section className="py-5 border-bottom" id="features">
            <Container className="px-5 my-5">
              <Row className="gx-5">
                <Col lg={4} className="mb-5 mb-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <BsCollection />
                  </div>
                  <h2 className="h4 fw-bolder">Featured title</h2>
                  <p>
                    Paragraph of text beneath the heading to explain the heading.
                    We'll add onto it with another sentence and probably just keep
                    going until we run out of words.
                  </p>
                  <a className="text-decoration-none" href="#!">
                    Call to action
                    <BsArrowRight />
                  </a>
                </Col>
                <Col lg={4} className="mb-5 mb-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 w-20 h-20">
                    <BsBuilding width={20} height={50} />
                  </div>
                  <h2 className="h4 fw-bolder">Featured title</h2>
                  <p>
                    Paragraph of text beneath the heading to explain the heading.
                    We'll add onto it with another sentence and probably just keep
                    going until we run out of words.
                  </p>
                  <a className="text-decoration-none" href="#!">
                    Call to action
                    <BsArrowRight />
                  </a>
                </Col>
                <Col lg={4}>
                  <BsToggles2
                    width={20}
                    height={20}
                    className="feature bg-primary bg-gradient text-white rounded-3 mb-3 w-20 h-20"
                  />
                  <h2 className="h4 fw-bolder">Featured title</h2>
                  <p>
                    Paragraph of text beneath the heading to explain the heading.
                    We'll add onto it with another sentence and probably just keep
                    going until we run out of words.
                  </p>
                  <a className="text-decoration-none" href="#!">
                    Call to action
                    <BsArrowRight />
                  </a>
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
                {data2?.slice(4, 7).map((item,i) => (
                  <Col key={item.name} lg={6} xl={4}>
                  <Card>
                    <Card.Img variant="top" src={`https://api.genshin.dev/characters/${data[i+4]}/card`} />
                    <Card.Body style={{ height: 180}}>
                      <Card.Title><b>{item.name}</b></Card.Title>
                      <Card.Title>{}</Card.Title>
                      <Card.Text style={{ WebkitLineClamp: 3, lineClamp: 3, textOverflow:'ellipsis' }}>
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                      <Card.Footer>
                      <div className="d-grid">
                        <Button
                          href={`/articles/detail/${data[i+4]}`}
                          variant="outline-primary">
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
