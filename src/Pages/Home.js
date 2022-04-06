import Card from './../components/Card';
import styled from 'styled-components';

const Home = ({ characters }) => {
  return (
    <main>
      <Wrapper>
        {characters.map(character => (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
            gender={character.gender}
            id={character.id}
            species={character.species}
            status={character.status}
            location={character.location.name}
            origin={character.origin.name}
          />
        ))}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
