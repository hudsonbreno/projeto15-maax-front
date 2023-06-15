import styled from "styled-components"

export default function Footer() {
  return (
    <ContainerFooter>
      <p>MAAX Fitness Suplementos</p>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFFFFF;
  background-color: #000000;
`