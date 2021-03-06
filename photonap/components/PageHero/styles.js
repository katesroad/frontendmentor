
import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${mediaQueries.medium} {
    flex-direction: row-reverse;
    .intro-text {
      width: 59.74vw;
    }
  }

  ${mediaQueries.large} {
    .intro-text {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      display: flex;
      align-items: center;
      .content {
        max-width: 26.1875rem;
      }
    }
  }
  @media only screen and (min-width: 1560px) {
    .intro-text {
      justify-content: flex-end;
      padding-right: 10vw;
    }
  }
`;

export const HeroImg = styled.div.attrs(() => ({
  className: "hero-img",
}))`
  height: 78.4vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  ${mediaQueries.medium} {
    flex-grow: 1;
    height: 63.8vw;
    width: 40.26vw;
  }
  ${mediaQueries.large} {
    width: 57.6vw;
    height: 30.625rem;
    background-size: cover;
  }
`;
