import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import PokeMarkChip from "../Common/PokeMarkChip";
import PokeNameChip from "../Common/PokeNameChip";
import { useEffect, useState } from "react";
import {
  fetchPokemonDetail,
  PokemonDetailType,
} from "../Service/pokemonService";

const tempImgUrl =
  "https://png.pngitem.com/pimgs/s/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png";

interface PokeCardProps {
  name: string;
}

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail)
    })();
  }, [props.name]);

  if(!pokemon) {
    return null
  }

  return (
    <div>
      <Item onClick={handleClick}>
        <Header>
          <PokeNameChip name={pokemon.name} id={pokemon.id}/>
        </Header>
        <Body>
          <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name} />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    </div>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 8px;

  width: 250px;
  height: 300px;

  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: yellow;
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;
