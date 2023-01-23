import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ListView from "../components/views/ListView";

import { api } from "../utils/api";

const Home: NextPage = () => {
  return (
    <>
      <header>T3 Demo</header>
      <ListView />
    </>
  );
};

export default Home;
