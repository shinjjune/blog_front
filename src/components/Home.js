/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main";
import { baseURL } from "../common/config";

export default function Home() {
  const [advertises, setAdvertises] = useState(null);
  const [page, setPage] = useState(1);

  const getAdvertises = async (p = 1) => {
    // 여기부분이 뿌려주는 거
    const url = `${baseURL}/advertise?page=${p}`;
    const { data } = await axios.get(url);
    setAdvertises(data.advertises);
  };
  const getNextPage = async () => {
    await getAdvertises(page + 1);
    setPage(page + 1);
  };

  const getAll = async () => {
    await getAdvertises();
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <Main advertises={advertises} getNextPage={getNextPage} />
    </>
  );
}
