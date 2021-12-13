import React, { useEffect } from "react";
import { NextPage } from "next";

import { Layout, Filters, Products, LoadButton } from "~/src/components";
import { TProducts } from "~/src/components/Products/types";
import { useStore, setData } from "~/src/store";

interface TProps extends TProducts {}

const IndexPage: NextPage<TProps> = ({ data }) => {
  const { dispatch } = useStore();

  useEffect(() => {
    if (data && data.items.length) {
      dispatch(setData(data));
    }
  }, [data, dispatch]);

  return (
    <Layout title="Home page">
      <Filters />
      <Products />
      <LoadButton />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const result = await fetch(`http://localhost:3000/api/data`);
  const data: TProducts = await result.json();

  return {
    props: { data },
  };
};

export default IndexPage;
