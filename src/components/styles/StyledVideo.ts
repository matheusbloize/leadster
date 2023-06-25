import styled from 'styled-components'

export const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom: 2em;
  box-shadow: 1px 15px 25px 3px rgb(200 200 200);
  border-radius: 1em;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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

    div::after {
      content: '';
      width: 100%;
      height: 235%;
      position: absolute;
      top: -10.55em;
      left: 0em;
      background-color: rgb(157, 213, 254);
      mix-blend-mode: multiply;
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
    }
  }
`
