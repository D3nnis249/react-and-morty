import Card from './../components/Card';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const Details = ({ characters }) => {
  const { id } = useParams();
  const currentCharacter = characters.find(character => character.id == id);

  return (
    <Wrapper>
      <Card
        id={currentCharacter.id}
        image={currentCharacter.image}
        name={currentCharacter.name}
        gender={currentCharacter.gender}
        species={currentCharacter.species}
        status={currentCharacter.status}
        location={currentCharacter.location.name}
        origin={currentCharacter.origin.name}
      ></Card>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Details;
