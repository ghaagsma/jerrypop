import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import GlamorPhotograph from './GlamorPhotograph';
import HabaneroRanch600 from '../images/glamorous-habanero-ranch-600.jpeg';
import HabaneroRanch1200 from '../images/glamorous-habanero-ranch-1200.jpeg';
import HabaneroRanch2400 from '../images/glamorous-habanero-ranch-2400.jpeg';
import HabaneroRanchWebp600 from '../images/glamorous-habanero-ranch-600.webp';
import HabaneroRanchWebp1200 from '../images/glamorous-habanero-ranch-1200.webp';
import HabaneroRanchWebp2400 from '../images/glamorous-habanero-ranch-2400.webp';
import { FOOTER_TOP_MARGIN_PX } from '../constants/breakpoint';

const PHOTOGRAPH_MAX_HEIGHT_PX = 450;

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledRegularSection = styled.section`
  align-items: center;
  display: flex;
  height: ${PHOTOGRAPH_MAX_HEIGHT_PX - 2 * FOOTER_TOP_MARGIN_PX}px;
  flex-direction: column;
  justify-content: center;
  margin: ${FOOTER_TOP_MARGIN_PX}px 0 0;
  width: 100%;
`;

const StyledTagline = styled(Typography)`
  font-size: 18px;
  margin: 0;
  max-width: 600px;
  padding: 0 24px;
`;

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jerrypop</title>
      </Helmet>
      <StyledHome>
        <GlamorPhotograph
          alt="Photograph of a blue bowl of Habanero Ranch Craft Popcorn on a wooden surface taken from directly above"
          aspectRatio={17 / 10}
          fallbackSrc={HabaneroRanch2400}
          fallbackSrcSet={`${HabaneroRanch600} 600w, ${HabaneroRanch1200} 1200w, ${HabaneroRanch2400} 2400w`}
          maxHeightPx={PHOTOGRAPH_MAX_HEIGHT_PX}
          srcSet={`${HabaneroRanchWebp600} 600w, ${HabaneroRanchWebp1200} 1200w, ${HabaneroRanchWebp2400} 2400w`}
        />
        <StyledRegularSection>
          <StyledTagline type="h1">
            Locally handcrafted San Francisco popcorn.
          </StyledTagline>
        </StyledRegularSection>
      </StyledHome>
    </>
  );
};

export default Home;
