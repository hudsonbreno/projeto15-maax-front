import styled from "styled-components";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import banner from "./style/Banner.png";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ConteudoPagina from "./components/ProdutosComponents/ConteudoPagina";

export default function Produtos() {
  const [selecionarCategoria, setSelecionarCategoria] =
    useState("Todos produtos");

  return (
    <PageProdutos>
      <Header />

      <Banner>
        <img src={banner} />
        <p>MAAXIMIZE</p>
        <h1>SEU GANHO COM NOSSOS SUPLEMENTOS</h1>
      </Banner>

      <ConteudoPagina selecionarCategoria={selecionarCategoria} setSelecionarCategoria={setSelecionarCategoria}/>
      <Footer />
    </PageProdutos>
  );
}

const PageProdutos = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

const Banner = styled.div`
  position: relative;
  width: 360px;
  height: 155px;
  img {
    width: 360px;
    height: 155px;
    position: absolute;
    object-fit: cover;
  }
  p {
    position: absolute;
    top: 10px;
    left: 36px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 1000;
    font-size: 35px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.295em;

    color: #8e2126;
  }
  h1 {
    position: absolute;
    top: 54px;
    left: 10px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.21em;

    color: #ffffff;
  }
`;