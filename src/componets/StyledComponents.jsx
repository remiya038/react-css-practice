import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Stitle>-StyledComponents-</Stitle>
      <FightButton>FIGHT</FightButton>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #329eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Stitle = styled.p`
  color: #329eff;
`;

const FightButton = styled.button`
  background-color: #329eff;
  border: none;
  border-radius: 10px;
`;
