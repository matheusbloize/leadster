import styled from 'styled-components'

export const StyledModal = styled.div`
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;

  .modal {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    border-radius: 1em;
    border-top: 0.4em solid #007eff;
    margin-top: 5em;
    position: relative;
  }

  .modal-exit {
    position: absolute;
    top: 0.5em;
    right: 1em;
    font-weight: 600;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      scale: 1.5;
    }
  }

  .modal-top {
    padding: 1.5em;
  }

  .modal-top h2 {
    font-size: 1.4em;
  }

  .modal-top span {
    color: #007eff;
  }

  .modal-center,
  .modal-center iframe {
    width: 100%;
  }

  .modal-bottom {
    padding: 1em 1.5em;
    text-align: justify;
  }

  .modal-bottom span {
    width: 100%;
    font-weight: 700;
  }

  .modal-bottom-title,
  .modal-bottom-description p {
    padding: 0.5em 0;
  }

  .modal-bottom-title {
    border-bottom: 0.1em solid #ccc;
  }

  .modal-bottom-downloads-options {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    gap: 0.5em;
  }

  .download-option {
    display: flex;
    align-items: center;
    background-color: green;
    border-radius: 0.5em;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      filter: brightness(120%);
    }
  }

  .download-option-icon {
    background-color: blue;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
  }

  .download-option-icon img {
    width: 50%;
    height: 50%;
  }

  .download-option-text p {
    margin: 0 0.5em;
  }

  .download-option:nth-child(1) {
    background-color: #c2f4ea;
    color: #1fbf9b;
  }

  .download-option:nth-child(1) .download-option-icon {
    background-color: #9fefdf;
  }

  .download-option:nth-child(1) .download-option-icon img {
    filter: invert(68%) sepia(61%) saturate(527%) hue-rotate(112deg)
      brightness(81%) contrast(93%);
  }

  .download-option:nth-child(2) {
    background-color: #c2e6ff;
    color: #38a1f2;
  }

  .download-option:nth-child(2) .download-option-icon {
    background-color: #a1d9ff;
  }

  .download-option:nth-child(2) .download-option-icon img {
    filter: invert(70%) sepia(63%) saturate(5842%) hue-rotate(187deg)
      brightness(107%) contrast(90%);
  }

  .download-option:nth-child(3) {
    background-color: #fff8d0;
    color: #b6a25b;
  }

  .download-option:nth-child(3) .download-option-icon {
    background-color: #fff1a0;
  }

  .download-option:nth-child(3) .download-option-icon img {
    filter: invert(63%) sepia(21%) saturate(771%) hue-rotate(9deg)
      brightness(97%) contrast(93%);
  }

  @media screen and (min-width: 48em) {
    height: -webkit-fill-available;

    .modal {
      width: 80%;
      margin-top: 0;
    }

    .modal-bottom-downloads-options {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 64em) {
    .modal {
      width: 60%;
    }

    .modal-top {
      padding: 1.5em 5.5em;
    }
  }

  @media screen and (min-width: 90em) {
    .modal {
      width: 40%;
    }
  }
`
