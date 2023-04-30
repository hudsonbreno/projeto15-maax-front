import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./style/Logo_360x131.png"

export default function Login({ setToken }) {
  const [form, setForm] = useState({ email: "", senha: "" });

  const navigate = useNavigate()

  function Digitando(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function logar(e) {
    e.prenventDefault();
    let dados = form
    console.log(dados)
    // const promise = axios.post(
    //   "URL do post no /login",
    //   dados
    // )
    navigate("/")
  }

  return (
    <>
      <PageLogin>
        <Formulario>
          <img src={Logo}/>
          <form onSubmit={logar}>
            <input
              type="email"
              name={"email"}
              placeholder="email"
              value={form.email}
              onChange={Digitando}
            ></input>
            <input
              type="password"
              name={"senha"}
              placeholder="senha"
              value={form.senha}
              onChange={Digitando}
            ></input>

              <button type="submit">Logar</button>
              <Link to="/cadastro">Primeira vez? Cadastrar</Link>
          </form>
        </Formulario>
      </PageLogin>
    </>
  );
}

const PageLogin = styled.div`
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

    font-family: "Recursive";
    font-style: normal;
    font-weight: 1000;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.09em;

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

