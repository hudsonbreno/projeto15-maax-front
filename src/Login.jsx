import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ setToken }) {
  const [form, setForm] = useState({ email: "", senha: "" });

  const navigate = useNavigate()

  function Digitando(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function logar(e) {
    e.prenventDefault();
    let dados = form
    const promise = axios.post(
      "URL do post no /login",
      dados
    )
  }

  return (
    <>
      <PageLogin>
        <img src="" />
        <Formulario>
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
          </form>
        </Formulario>
      </PageLogin>
    </>
  );
}

const PageLogin = styled.div`
  display: flex;
  background-color: #000000;
  img{
    width:360px;
    height:131px;
  }
`;

const Formulario = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  input{
    width:326px;
    height:58;
    margin-top:13px;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 1000;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.09em;

color: #7D7B7B;
  }
  button{
    width:326px;
    height:326px;
    
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 1000;
    font-size: 28px;
    line-height: 34px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.09em;

color: #8E2126;
  }
`
