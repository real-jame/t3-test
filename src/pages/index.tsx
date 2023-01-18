import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

import { trpc } from "../utils/trpc";

const Table = () => {
  const { data: transactions, isLoading } = trpc.useQuery;
};

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <header>T3 Demo</header>
      {/* TODO <List> */}
    </>
  );
};

export default Home;
