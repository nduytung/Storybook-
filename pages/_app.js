import "../styles/globals.css";
import Layout from "../src/container/layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Storybook </title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
