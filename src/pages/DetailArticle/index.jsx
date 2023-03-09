import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailArticle() {
  const { id } = useParams();

  const [data, setData] = useState({});

  async function getPets() {
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
    getPets();
  }, []);

  return (
    <>
      <div>Detail Article</div>
      <div>NAME : {data.name}</div>
      <div>TITLE : {data.state}</div>
      <div>VISION : {data.animal}</div>
      <div>SWORD: {data.breed}</div>
      <div>DESC: {data.description}</div>
    </>
  );
}
