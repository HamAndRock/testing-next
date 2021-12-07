import React, { useState, useEffect } from "react";
import { NextPage } from "next";

import { Layout, Filters, Products } from "~/src/components";
import { TProducts } from "~/src/components/Products/types";

interface TProps extends TProducts {}

const IndexPage: NextPage<TProps> = (props) => {
  const {
    data: { items },
  } = props;

  return (
    <Layout title="Home page">
      <Filters />
      <Products products={items} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const result = await fetch(`http://localhost:3000/api/data`);
  const data = await result.json();

  return {
    props: { data },
  };
};

export default IndexPage;
