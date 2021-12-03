import React, { useState, useEffect } from "react";
import { NextPage } from "next";

import { Layout } from "~/src/components/Layout";
import { Container } from "~/theme/components";

interface TProps {
  // products: TProduct[];
}

const IndexPage: NextPage<TProps> = () => {
  return (
    <Layout title="Home page">
      <Container>Font</Container>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default IndexPage;
