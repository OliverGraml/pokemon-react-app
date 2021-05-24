import pokebanner from '../images/pokebanner.png';
import mauzi from '../images/mauzi.png';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <ImageWrap>
        <Banner src={pokebanner} alt="Pokemon Banner" />
        <Image src={mauzi} alt="Mauzi" />
      </ImageWrap>
    </>
  );
}

const Banner = styled.img`
  width: 85%;
`;

const Image = styled.img`
  width: 70%;
  border: 3px solid white;
  border-radius: 5px;
  padding: 3rem;
  margin: 3rem;
`;
const ImageWrap = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;
