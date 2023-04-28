import axios from "axios"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"


export default function Cadastro() {

    console.log("aqui")

    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome:"",
        email:"",
        password: ""
    })

    function cadastrar(e) {
        e.preventDefault();
        let dados = form;
        const promise = axios.post(
            "mongodb+srv://admin:admin@cluster0.orvq6x6.mongodb.net/?retryWrites=true&w=majority",
            dados
        );

        promise.then(() => navigate("/"))

        promise.catch((resposta) => alert(resposta.response.data.message) || setHabilitado(false));
    }

    function Digitando(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <PageCadastro>
            <Formulario>
                <form onSubmit={cadastrar}>
                    <input
                        type="email"
                        name={"email"}
                        value={form.email}
                        placeholder="email"
                        onChange={Digitando}
                    />
                    <input
                        type="password"
                        name={"senha"}
                        value={form.senha}
                        placeholder="senha"
                        onChange={Digitando}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </Formulario>

            <Link to="../">
                já tem uma conta? Faça login!
            </Link>
        </PageCadastro>
    )
}

const PageCadastro = styled.div`
    display: flex;
    backgorund-color:#000000;
`

const Formulario = styled.div`
  display:flex;
  flex-direction:column;
  align-itens: center;
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