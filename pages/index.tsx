import React, { useState, useEffect } from "react";
import { NextPage } from "next";

import { Layout, Filters, Products } from "~/src/components";
import { TProducts } from "~/src/components/Products/types";
import { Button } from "~/theme/components/Button";
import { useStore } from "~/store";
import { setData } from "~/store/actions";

interface TProps extends TProducts {}

const IndexPage: NextPage<TProps> = (props) => {
  const { state, dispatch } = useStore();
  const { data } = props;

  useEffect(() => {
    if (data && data.items.length) {
      dispatch(setData(data));
    }
  }, [data, dispatch]);

  return (
    <Layout title="Home page">
      <Filters />
      <Products />
      <Button>Načíst další</Button>
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
