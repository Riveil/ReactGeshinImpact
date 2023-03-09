
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

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
      {/* Characters */}
      
      <section className="bg-light py-5 border-bottom">
        <Container className="px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Genshin Impact Characters</h2>
          </div>
          <Row className="gx-5 justify-content-center">
            {data2?.map((item, i) => (
              <Col key={item.name} lg={6} xl={4}>
                <a href={`/articles/detail/${data[i]}`} className="text-center" style={{ textDecoration: "none", color:"black"}}>
                <Card  className="my-2">
                  <Card.Img height={400}
                    src={`https://api.genshin.dev/characters/${data[i]}/icon-big`}
                    alt="Icon Tidak Ditemukan"
                  />
                  <Card.Body>
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
                    </Card.Text>
                  </Card.Body>
                </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
