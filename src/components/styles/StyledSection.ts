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

  p {
    width: 80%;
    color: #1c3c50;
    font-weight: 500;
    font-size: 0.85em;
  }

  p span {
    font-weight: 700;
  }
`

export const StyledBottomSection = styled.section`
  background-color: #f0f8ff;

  img {
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

  .bottom-section-info {
    width: 80%;
    margin: 0 auto;
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
    padding: 1.2em 1em;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 1.8em;
  }

  .bottom-section-info-center img {
    width: 100%;
    height: 100%;
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
`
