import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
      <Wrapper>
    <StyledCard>
      <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"></img>
        <h2>Morty Smith</h2>
    </StyledCard>
    </Wrapper>
  );
};

const Wrapper = styled.main`
display: flex;
justify-content: center;

`;


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  border: 2px solid black;
  
`;


export default Card;