import React from 'react';
import ProductListing from './ProductListing';
import { PRODUCTS } from '../constants/product';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import ProductsJpg600 from '../images/glamorous-products-600.jpg';
import ProductsJpg1200 from '../images/glamorous-products-1200.jpg';
import ProductsJpg2400 from '../images/glamorous-products-2400.jpg';
import ProductsWebp600 from '../images/glamorous-products-600.webp';
import ProductsWebp1200 from '../images/glamorous-products-1200.webp';
import ProductsWebp2400 from '../images/glamorous-products-2400.webp';

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Products: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Products · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of packaged Jerrypop craft popcorn varieties on a wooden bartop"
        aspectRatio={1 / 1}
        fallbackSrc={ProductsJpg2400}
        fallbackSrcSet={`${ProductsJpg600} 600w, ${ProductsJpg1200} 1200w, ${ProductsJpg2400} 2400w`}
        maxHeightPx={500}
        srcSet={`${ProductsWebp600} 600w, ${ProductsWebp1200} 1200w, ${ProductsWebp2400} 2400w`}
      />
      <Typography type="h1">Products</Typography>
      <StyledUnorderedList>
        {PRODUCTS.map((product) => (
          <ProductListing key={product.title} product={product} />
        ))}
      </StyledUnorderedList>
    </>
  );
};

export default Products;
