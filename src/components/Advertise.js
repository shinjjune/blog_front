/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../common/config";

export default function Advertise({ match }) {
  const [advertise, setAdvertise] = useState(null);
  const getAdvertise = async () => {
    const url = `${baseURL}/advertise/${match.params.id}`;
    const { data } = await axios.get(url);
    setAdvertise(data);
  };
  useEffect(() => {
    getAdvertise();
  }, []);
  return (
    <>
      <h1>{advertise && advertise.title}</h1>
      <div>페이지 접근</div>
      <p>{advertise && advertise.content}</p>
    </>
  );
}
