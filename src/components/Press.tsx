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
import { ARTICLES } from '../constants/press';
import { TILE_LIST_IMAGE_WIDTH_PX } from '../constants/breakpoint';

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledArticleListItem = styled(StyledTileListItem)`
  text-decoration: none;
`;

const StyledArticlePublication = styled(Typography)`
  margin: 0 0 12px;
  line-height: 17px;
  text-transform: uppercase;
`;

const StyledArticleTitle = styled(Typography)`
  margin: 0;
`;

const StyledArticleDate = styled(Typography)`
  font-size: 12px;
  line-height: 15px;
  margin: 16px 0 0;
`;

const Press: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Press · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of a wooden bowl of Baklava Craft Popcorn taken outdoors"
        aspectRatio={3024 / 3082}
        fallbackSrc={Baklava2400}
        fallbackSrcSet={`${Baklava600} 600w, ${Baklava1200} 1200w, ${Baklava2400} 2400w`}
        srcSet={`${BaklavaWebp600} 600w, ${BaklavaWebp1200} 1200w, ${BaklavaWebp2400} 2400w`}
      />
      <Typography type="h1">Press</Typography>
      <StyledTileList>
        {ARTICLES.map((article) => (
          <StyledListItem key={article.title}>
            <StyledArticleListItem
              as="a"
              href={article.href}
              rel="noreferrer"
              target="_blank"
            >
              <StyledTileImageContainer>
                <StyledTileImage
                  alt={article.imageAltText}
                  fallbackSrc={article.image}
                  fallbackSrcSet={`${article.image} 600w`}
                  sizes={`${TILE_LIST_IMAGE_WIDTH_PX}px (min-width: ${TILE_LIST_IMAGE_WIDTH_PX}px), 95vw`}
                  srcSet={`${article.imageWebp} 600w`}
                />
              </StyledTileImageContainer>
              <StyledTileInformation>
                <StyledArticlePublication type="p">
                  {article.publication}
                </StyledArticlePublication>
                <StyledArticleTitle type="h2">
                  {article.title}
                </StyledArticleTitle>
                <StyledArticleDate type="p">{article.date}</StyledArticleDate>
              </StyledTileInformation>
            </StyledArticleListItem>
          </StyledListItem>
        ))}
      </StyledTileList>
    </>
  );
};

export default Press;
