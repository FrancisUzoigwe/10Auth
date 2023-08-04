import styled from "styled-components";
import { useState } from "react";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(scroll!);
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <div>
      {scroll ? (
        <Container bg="#c021c0">
          <Main>
            <Logo>Logo</Logo>
            <CTA>
              <Button></Button>
            </CTA>
          </Main>
        </Container>
      ) : (
        <Container bg="transparent">
          <Main>
            <Logo>Logo</Logo>
            <CTA>
              <Button></Button>
            </CTA>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default FirstHeader;

const Button = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  font-weight: 500;
`;

const Main = styled.div`
  width: 93%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 55px;
  display: flex;
  transition: all 400ms;
  /* background-color: #c021c0; */
  background-color: ${({ bg }) => bg};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
`;
