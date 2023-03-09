import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  Card, Col, Container, Image, Row, Tab, Tabs } from "react-bootstrap";
import Star from '../../assets/star.png';
export default function DetailArticle() {
  const { id } = useParams();

  const [data, setData] = useState({});

  async function getDetailCharacter() {
    try {
      const response = await axios.get(
        `https://api.genshin.dev/characters/${id}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  

  useEffect(() => {
    getDetailCharacter();
  }, []);
  

  return (
    <>
    {/* Detail Character */}
    <section className="bg-light py-5 border-bottom">
      <Container className="px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">Detail Genshin Impact Character</h2>
        </div>
        <Row className="gx-5 justify-content-center">
          
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://api.genshin.dev/characters/${
                    id
                  }/gacha-splash`}
                />
                <Card.Footer>
                    <div className="d-grid text-center">
                      <b>{data.name}</b>
                    </div>
                  </Card.Footer>
              </Card>
            </Col>
            <Col>
            <Card>
                <Card.Body>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="home" title="Desc">
                      <h5>{data.description}</h5>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                    <Row>
                        <Col lg={3}>Title</Col>
                        <Col>: {data.title}</Col>
                      </Row>
                      <Row>
                        <Col lg={3}>Vision</Col>
                        <Col>: {data.vision}</Col>
                      </Row>
                      <Row>
                        <Col lg={3}>Weapon</Col>
                        <Col>: {data.weapon}</Col>
                      </Row>
                      <Row>
                        <Col lg={3}>Nation</Col>
                        <Col>: {data.nation}</Col>
                      </Row>
                      <Row>
                        <Col lg={3}>Affiliation</Col>
                        <Col>: {data.affiliation}</Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Rarity">
                    <Row>
                      {Array.from({ length: data.rarity }).map((_, index) => (
                        <Col key={`rarity-${index}`} sm={2} className="mb-4">
                          <div>
                            <img src={Star} style={{ width: "50px", height: "auto", display: "block" }} alt="" />
                          </div>
                        </Col>
                      ))}
                    </Row>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>         
            </Col>
        </Row>
      </Container>
    </section>
  </>
  );
}

