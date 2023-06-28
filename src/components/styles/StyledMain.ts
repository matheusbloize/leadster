import styled from 'styled-components'

export const StyledMain = styled.main`
  width: 90%;
  margin: 3em auto;

  .main-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    border-bottom: 1px solid #d5d9dd;
  }

  .main-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  .main-select {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    position: relative;
  }

  .main-select p {
    font-weight: 700;
    margin-right: 1em;
  }

  .main-select select {
    border-radius: 0.5em;
    padding: 0.4em 2.4em 0.4em 0.8em;
    transition: 0.2s;
    border: 1px solid #1c3c50;
    background-color: #fff;
    font-weight: 600;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    text-align: center;
    border: 1px solid #1c3c50;
  }

  .main-select::after {
    content: '';
    position: absolute;
    left: 16.4em;
    top: 0.7em;
    border-bottom: 0.45em solid #1c3c50;
    border-left: 0.45em solid transparent;
    border-right: 0.45em solid transparent;
    transform: rotateZ(180deg);
  }

  .main-select select option {
    font-weight: 600;
  }

  .main-videos {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #d5d9dd;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    gap: 0.5em;
  }

  .main-page p {
    font-weight: 700;
  }

  .main-page button {
    border: none;
    background-color: #fff;
    transition: 0.4s;
    border: 1px solid transparent;
    font-size: 1.2em;
    border-radius: 0.2em;
    padding: 0 0.3em;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: #007bff;
      border-color: #007bff;
    }
  }

  @media screen and (min-width: 48em) {
    width: 80%;

    .main-videos {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  @media screen and (min-width: 90em) {
    .main-top {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
`
