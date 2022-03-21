import type { NextPage } from "next";
import Head from "next/head";
import { ServiceOfferForm } from "../../../components/ServiceOfferForm";

const ServicesOfferPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Marketplace de servicos - Criar Oferta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Marketplace de servicos- Criar Oferta</h1>
        <ServiceOfferForm />
      </main>
    </div>
  );
};

export default ServicesOfferPage;
