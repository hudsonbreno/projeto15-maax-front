import axios from "axios"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";


export default function Cadastro(){

    const navigate = useNavigate();

    const [form, setForm ] = useState({
        nome,
        email,
        password
    })

    function cadastrar(e) {
        e.preventDefault();
        let dados = form;
        const promise = axios.post(
            "mongodb+srv://admin:admin@cluster0.orvq6x6.mongodb.net/?retryWrites=true&w=majority",
          dados
        );
    
        promise.then(() => navigate("/")        )

        promise.catch((resposta) => alert(resposta.response.data.message)||setHabilitado(false));
      }

      function Digitando(e){
        setForm({...form, [e.target.name]: e.target.value })
      }
    
    return(
        <PageCadastro>
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
            <button type="submit"></button>
        </form>

            <Link to="../">
                já tem uma conta? Faça login!
            </Link>
        </PageCadastro>
    )
}

const PageCadastro = styled.div`
    display: flex;
`