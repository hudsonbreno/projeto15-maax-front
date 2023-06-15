import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import styled from "styled-components";

export default function Carrinho() {
    const [selecionarQuant , setSelecionarQuant] = useState("1");


  return (
    <PageCarrinho>
      <Header />
      <ContainerCarrinho>
        <h1>CARRINHO DO BRENO</h1>

        <Card>
            <img src=""/>
            <h1>Hipercalorico</h1>
            <div>
                <p>Quant.</p>
                <select
                id="Quant"
                value={selecionarQuant}
                onChange={(e) => setSelecionarQuant(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
        </Card>

      </ContainerCarrinho>
      <Total>
        <h2>Total</h2>
        <h2>R$129,99</h2>
      </Total>
      <BotaoFinalizar>
        <button type="submit">Finalizar</button>
      </BotaoFinalizar>
      <Footer></Footer>
    </PageCarrinho>
  );
}

const PageCarrinho = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const ContainerCarrinho = styled.div`
  padding-top: 15px;
  padding-bottom:15px;
  height: 240px;
  h1 {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;

    color: #000000;
  }
`;
const Card = styled.div`
 display: flex;
`

const Total = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: #000000;
  }
`;

const BotaoFinalizar = styled.div`
  padding-top:35px;
  padding-bottom:35px;
  button {
    display: flex;
    width: 326px;
    height: 58px;
    justify-content: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 1000;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.515em;

    color: #8e2126;
    background-color: #000000;
  }
  button {
    border: none;
  }

  button:focus {
    border: none;
    outline: none;
  }

  button:focus {
    outline: none !important;
  }

`;
