import styled from "styled-components"

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Main>Yhis is the Landig Page</Main>
      </Container>
    </div>
  )
}

export default LandingPage

const Main = styled.div`
width: 93%;
height: 140vh;
margin-top: 60px;
`;

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: auto;
`;