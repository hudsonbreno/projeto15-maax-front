import styled from "styled-components";
import CategoriaSearch from "./CategoriaSearch.jsx";
import Promocao from "../../style/Promocao.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function ConteudoPagina({selecionarCategoria, setSelecionarCategoria}) {
    const [produtos, setProdutos] = useState([]);
    const urlProdutos = `${process.env.REACT_APP_API_URL}`;

    useEffect(() => {
        const res = axios.get(`${urlProdutos}/`);
    
        res.then((res) => {
          setProdutos(res.data.rows);
        });
        res.catch((erro) => {
          console.log("aqui" + erro);
        });
      }, []);


  return (
    <ConteudoPage>
      <CategoriaSearch
        selecionarCategoria={selecionarCategoria}
        setSelecionarCategoria={setSelecionarCategoria}
      />

      <NomeCategoria>
        <img src={Promocao} />
        <p>{selecionarCategoria}</p>
      </NomeCategoria>
      <ListaProdutos>
        {produtos.map((produto) => (
          <Produto key={produto.id}>
            <Link to={`/descricao/${produto.id}`}>
              <img src={produto.url_img} />
              <h1>{produto.descricao}</h1>
              <p>R${produto.valor}</p>
            </Link>
          </Produto>
        ))}
      </ListaProdutos>
    </ConteudoPage>
  );
}

const ConteudoPage = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  button {
    margin-top: 16px;
    margin-bottom: 10px;
  }
`;


const ListaProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const NomeCategoria = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  img {
    width: 38px;
    margin-left: 15px;
    margin-right: 15px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;
const Produto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 177px;
  a {
    text-decoration: none;
    width: 150px;
    border-radius: 10px;
    border: solid #d9d9d9 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:10px;
    img {
      margin-top: 3px;
      width: 113px;
      height: 119px;
    }
    h1 {
      margin-top: 3px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      text-align: center;

      color: #000000;
    }
    p {
      margin-top: 7px;
      margin-bottom: 7px;
      background-color: #d9d9d9;
      border-radius: 20px;
      width: 72px;
      height: 26px;
      align-items: center;
      justify-content: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: center;

      color: #000000;
    }
  }
`;
