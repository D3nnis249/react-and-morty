import styled from 'styled-components';
import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Card = ({
  image,
  name,
  id,
  gender,
  status,
  species,
  origin,
  location,
}) => {
  const [cardDetailsOn, setCardDetailsOn] = useState(true);
  const handleDetails = () => {
    setCardDetailsOn(changeState => !changeState);
  };

  return (
    <>
      {cardDetailsOn ? (
        <ListItem>
          <img src={image} alt="Profile picture"></img>
          <h2>{name}</h2>
          <AllButtons>
            <LinkStyling onClick={handleDetails} to={`/Details/${id}`}>
              Show more
            </LinkStyling>
          </AllButtons>
        </ListItem>
      ) : (
        <ListItem>
          <img src={image} alt="Profile picture" />
          <h2>{name}</h2>
          <p>Location: {location}</p>
          <p>Species: {species}</p>
          <p>Status: {status}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin}</p>
          <AllButtons onClick={handleDetails}>Show Less</AllButtons>
        </ListItem>
      )}
    </>
  );
};

const ListItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  box-shadow: 1px 1px 5px 1px;
  border-radius: 5px;
  padding-bottom: 10px;
  list-style: none;
  background-color: orange;
  margin-bottom: 2em;
`;

const AllButtons = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  background-color: green;
  padding: 1em;
  text-decoration: none;
  color: white;
  font-size: 1em;
`;

const LinkStyling = styled(Link)`
  text-decoration: none;
  color: white;
  &:active {
    color: orange;
  }
`;

//<FavoriteButton>Save as favorite</FavoriteButton>

export default Card;
