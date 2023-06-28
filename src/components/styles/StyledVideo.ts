import styled from 'styled-components'

export const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 2em;
  box-shadow: 1px 15px 25px 3px rgb(200 200 200);
  border-radius: 1em;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 11;
    background-color: #fff;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }

  div p {
    padding: 1em;
    font-weight: 700;
    transition: 0.5s;
  }

  &:hover {
    p {
      color: #059cff;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0em;
      left: 0em;
      background-color: rgb(157, 213, 254);
      mix-blend-mode: multiply;
      border-radius: 1em;
      z-index: 10;
    }
  }

  @media screen and (min-width: 48em) {
    width: 35%;
  }

  @media screen and (min-width: 90em) {
    width: 30%;
  }
`
