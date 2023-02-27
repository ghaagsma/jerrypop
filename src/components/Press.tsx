import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import Baklava600 from '../images/glamorous-baklava-600.jpeg';
import Baklava1200 from '../images/glamorous-baklava-1200.jpeg';
import Baklava2400 from '../images/glamorous-baklava-2400.jpeg';
import BaklavaWebp600 from '../images/glamorous-baklava-600.webp';
import BaklavaWebp1200 from '../images/glamorous-baklava-1200.webp';
import BaklavaWebp2400 from '../images/glamorous-baklava-2400.webp';
import styled from 'styled-components';
import {
  StyledTileImage,
  StyledTileImageContainer,
  StyledTileInformation,
  StyledTileList,
  StyledTileListItem,
} from '../constants/css/tile-list';
import { TILE_LIST_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';
import { ARTICLES } from '../constants/press';

const StyledListItem = styled.li`
  width: 100%;
`;

const StyledArticleListItem = styled(StyledTileListItem)`
  margin: 0 auto;
  padding: 32px 24px;
  text-decoration: none;

  @media (max-width: ${TILE_LIST_BREAKPOINT_WIDTH_PX}px) {
    padding: 32px 0;
  }
`;

const StyledArticlePublication = styled(Typography)`
  margin: 0 0 8px;
  text-transform: uppercase;
`;

const StyledArticleTitle = styled(Typography)`
  margin: 0;
`;

const Press: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Press · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of a wooden bowl of Baklava Craft Popcorn taken outdoors"
        aspectRatio={1800 / 2400}
        fallbackSrc={Baklava2400}
        fallbackSrcSet={`${Baklava600} 600w, ${Baklava1200} 1200w, ${Baklava2400} 2400w`}
        srcSet={`${BaklavaWebp600} 600w, ${BaklavaWebp1200} 1200w, ${BaklavaWebp2400} 2400w`}
      />
      <Typography type="h1">Press</Typography>
      <StyledTileList>
        {ARTICLES.map((article) => (
          <StyledListItem>
            <StyledArticleListItem
              as="a"
              href={article.href}
              rel="noreferrer"
              target="_blank"
            >
              <StyledTileImageContainer>
                <StyledTileImage src={article.image} />
              </StyledTileImageContainer>
              <StyledTileInformation>
                <StyledArticlePublication type="p">
                  {article.publication}
                </StyledArticlePublication>
                <StyledArticleTitle type="h2">
                  {article.title}
                </StyledArticleTitle>
              </StyledTileInformation>
            </StyledArticleListItem>
          </StyledListItem>
        ))}
      </StyledTileList>
    </>
  );
};

export default Press;