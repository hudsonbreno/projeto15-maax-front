import { useState } from "react"
import styled from "styled-components"
import atualizarProdutos from "./atualizarProdutos.js"

export default function CategoriaSearch({selecionarCategoria, setSelecionarCategoria}){

    return(
        <Categoria>
        <select
          id="category"
          value={selecionarCategoria}
          onChange={(e) => {
            setSelecionarCategoria(e.target.value)
            atualizarProdutos(e.target.value)
          }}
        >
          <option value="Todos">Selecione</option>
          <option value="Whey">Whey</option>
          <option value="Creatina">Creatina</option>
          <option value="Pre Treino">Pre Treino</option>
          <option value="Termogenico">Termogenico</option>
          <option value="Hipercalórico">Hipercalórico</option>
          <option value="Diversos">Diversos</option>
        </select>
      </Categoria>
    )
}

const Categoria = styled.div`
  display: flex;
  select {
    margin-top: 26px;
    margin-bottom: 17px;
    width: 225px;
    height: 42px;
    text-align: center;
    border-radius: 17px;
    background-color: #5a5a5a;

    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;