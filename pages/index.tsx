import React, { useState, useEffect } from "react";
import { NextPage } from "next";

import { Layout } from "~/src/components/Layout";
import { Filters } from "~/src/components/Filters/Filters";

interface TProps {
  // products: TProduct[];
}

const IndexPage: NextPage<TProps> = () => {
  return (
    <Layout title="Home page">
      <Filters />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default IndexPage;
