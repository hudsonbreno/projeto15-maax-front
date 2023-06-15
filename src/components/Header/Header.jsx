import Menu from "../../style/3tracinhos.png"
import Carrinho from "../../style/carrinho.png"
import Logo from "../../style/Logo.png";
import styled from "styled-components"

export default function Header() {
  return (
    <ContainerHeader>
      <img src={Menu} onClick={() => console.log("imagem menu")} />
      <img className="logo" src={Logo} />
      <img src={Carrinho} onClick={() => console.log("imagem carrinho")} />
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #000000;
  img {
    margin-left: 15px;
    margin-right: 15px;
    height: 50px;
    width: 50px;
  }
  .logo {
    width: 211px;
    height: 70px;
  }
`;
