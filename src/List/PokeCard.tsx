import styled from "@emotion/styled";
import PokeMarkChip from "../Common/PokeMarkChip";
import PokeNameChip from "../Common/PokeNameChip";

const tempImgUrl =
  "https://png.pngitem.com/pimgs/s/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png";
const PokeCard = () => {
  return (
    <div>
      <Item>
        <Header>
          <PokeNameChip />
        </Header>
        <Body>
          <Image src={tempImgUrl} alt="이상해씨" />
        </Body>
        <Footer>
          <PokeMarkChip/>
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
  margin : 8px 0;
`;

export default PokeCard;
