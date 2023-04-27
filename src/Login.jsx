import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ setToken }) {
  const [form, setForm] = { email: "", senha: "" };

    const navigate = useNavigate()

    function Digitando(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    function logar(e){
        e.prenventDefault();
        let dados= form
        const promise= axios.post(
            "URL do post no /login",
            dados
        )
    }

  return (
    <>
      <PageLogin>
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
          </form>
        </Formulario>
      </PageLogin>
    </>
  );
}

const PageLogin = styled.div`
  display: flex;
`;
