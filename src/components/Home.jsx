import '../styles/Home.scss';
import {
  KERNEL_FOUNTAIN_DELAY,
  KERNEL_FOUNTAIN_DURATION,
  KERNEL_FOUNTAIN_KERNEL_COUNT,
} from '../constants/Animation';
import Footer from './Footer';
import InteractiveLink from './InteractiveLink';
import KernelFountain from './KernelFountain';
import React from 'react';
import logo from '../Jerrypop.png';
import useWindowSize from '@rehooks/window-size';
import { vmin } from '../utilities/Screen';

const LOGO_TOP_MARGIN = 48;

function getFountainLeft({ innerHeight, innerWidth }) {
  return innerWidth / 2 - vmin(3.5, innerHeight, innerWidth) / 2;
}

function getFountainTop({ innerHeight, innerWidth }) {
  return LOGO_TOP_MARGIN + 0.65 * vmin(40, innerHeight, innerWidth);
}

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <div className="Home">
      <img className="Home__logo" src={logo} alt="Jerrypop Logo" />
      <h1 className="Home__heading">Poppin’ off with Jerry</h1>
      <p className="Home__content">
        Pick up an{' '}
        <a
          href="https://www.amazon.com/gp/product/B01G7DM3G2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01G7DM3G2&linkCode=as2&tag=jerry04c-20&linkId=ca82b9da5246d1a9a2e398a2d6be50c2"
          rel="noopener noreferrer"
          target="_blank"
        >
          air popper
        </a>{' '}
        and an enormous bowl before you do anything else.
      </p>
      <InteractiveLink
        defaultText="🍿 Start poppin’ 🍿"
        interactiveText="💥 Start poppin’ 💥"
        to="/user/IfGqGIjqLIP4soMIrBI9ULIUmUy2"
      />
      <Footer />
      <KernelFountain
        delay={KERNEL_FOUNTAIN_DELAY}
        duration={KERNEL_FOUNTAIN_DURATION}
        id="home-fountain"
        kernelCount={KERNEL_FOUNTAIN_KERNEL_COUNT}
        left={getFountainLeft(windowSize)}
        top={getFountainTop(windowSize)}
      />
    </div>
  );
}
