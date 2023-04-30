import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./style/Logo_360x131.png"

export default function Cadastro() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
  });

  function cadastrar(e) {
    e.preventDefault();
    let dados = form;
    const promise = axios.post(
      "mongodb+srv://admin:admin@cluster0.orvq6x6.mongodb.net/?retryWrites=true&w=majority",
      dados
    );

    promise.then(() => navigate("/"));

    promise.catch(
      (resposta) =>
        alert(resposta.response.data.message) || setHabilitado(false)
    );
  }

  function Digitando(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <PageCadastro>
      <Formulario>
        <img src={Logo}/>
        <form onSubmit={cadastrar}>
          <input
            type="email"
            name={"email"}
            value={form.email}
            placeholder="  email"
            onChange={Digitando}
          />
          <input
            type="password"
            name={"senha"}
            value={form.senha}
            placeholder="  senha"
            onChange={Digitando}
          />
          <input
          type="endereco"
          name={"endereco"}
          value={form.endereco}
          placeholder="  endereço"></input>
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="../login">já tem uma conta? Faça login!</Link>
      </Formulario>
    </PageCadastro>
  );
}

const PageCadastro = styled.div`
  display: flex;
  justify-content: center;
`;

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top:126px;
    margin-bottom: 60px;
    width: 360px;
    height: 131px;
  }
  input {
    width: 326px;
    height: 58px;
    margin-top: 13px;

    border-radius: 5px;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 1000;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.09em;

    color: #7D7B7B;
    

border: 1px solid #000000;

}
  

  button {
    margin-top: 45px;
    margin-bottom: 32px;
    width: 326px;
    height: 58px;

    font-family: "Recursive";
    font-style: normal;
    font-weight: 1000;
    font-size: 28px;
    line-height: 34px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.09em;

    color: #8e2126;
  }

  a {
    display: flex;
    justify-content: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 1000;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.09em;

    color: #7d7b7b;

    border: 1px solid #ffffff;
  }
`;
