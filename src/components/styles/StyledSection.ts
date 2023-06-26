import styled from 'styled-components'

export const StyledTopSection = styled.section`
  background-color: #f0f8ff;
  height: 15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border-bottom: 1px solid #d5d9dd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  div span {
    color: #0084ff;
    border: 0.25em solid #0084ff;
    border-radius: 1em;
    border-bottom-left-radius: 0.2em;
    padding: 0.4em 1.4em;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.6em;
  }

  div h2,
  div h1 {
    text-transform: capitalize;
  }

  div h1 {
    color: #0084ff;
    font-size: 2.5em;
  }

  div h2 {
    margin-top: 0.4em;
  }

  p {
    width: 80%;
    color: #1c3c50;
    font-weight: 500;
    font-size: 0.85em;
    margin-top: 0.5em;
  }

  p span {
    font-weight: 700;
  }

  @media screen and (min-width: 48em) {
    height: 20em;

    div span {
      font-size: 0.7em;
    }

    div h2 {
      font-size: 2em;
    }

    div h1 {
      font-size: 3.5em;
    }

    p {
      width: auto;
    }
  }

  @media screen and (min-width: 64em) {
    div {
      width: 50%;
    }

    div h2 {
      font-size: 2.2em;
    }

    div h1 {
      font-size: 4em;
    }
  }
`

export const StyledBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;

  .bottom-section-img,
  .bottom-section-info {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom-section-info {
    flex-direction: column;
  }

  .bottom-section-img img {
    width: 100%;
    height: 100%;
  }

  h2,
  p {
    font-weight: 500;
  }

  p {
    margin-bottom: 1em;
  }

  p span {
    font-weight: 700;
  }

  .bottom-section-info-top {
    border-bottom: 1px solid #d5d9dd;
  }

  .bottom-section-info-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    gap: 1em;
  }

  .bottom-section-info-center button {
    border: none;
    background-color: #0083ff;
    color: #fff;
    padding: 1.2em 1.6em;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 1.8em;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }
  }

  .bottom-section-info-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bottom-section-info-bottom p span {
    font-weight: 600;
  }

  .bottom-section-info-bottom-card,
  .bottom-section-info-bottom-review {
    display: flex;
  }

  .bottom-section-info-bottom-card img {
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
  }

  .bottom-section-info-bottom-review img {
    width: 5em;
    height: 1em;
    margin-right: 0.2em;
  }

  @media screen and (min-width: 48em) {
    img:nth-child(1) {
      width: 75%;
      height: 75%;
    }

    .bottom-section-info-bottom-card img {
      width: 1em;
      height: 1em;
    }

    .bottom-section-info-bottom-review img {
      width: 5em;
      height: 1em;
    }
  }

  @media screen and (min-width: 64em) {
    flex-direction: row;
  }
`
