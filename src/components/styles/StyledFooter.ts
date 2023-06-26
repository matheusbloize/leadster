import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 80%;
  margin: 0 auto;
  margin-top: 2em;

  p {
    color: #647599;
  }

  .footer-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
  }

  .footer-top div {
    width: 40%;
  }

  .footer-top img {
    width: 100%;
    height: 100%;
  }

  span {
    font-weight: 700;
  }

  .links {
    border-bottom: 1px solid #d5d9dd;
  }

  .footer-copyright {
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .footer-copyright-info a {
    text-decoration: none;
    color: #00b1f5;
  }

  @media screen and (min-width: 48em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .links {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  @media screen and (min-width: 64em) {
    .footer-copyright {
      flex-direction: row;
    }

    .links {
      display: flex;
      flex-wrap: nowrap;
      gap: 5em;
    }
  }

  @media screen and (min-width: 90em) {
    .footer-top div {
      width: 75%;
    }
  }
`

export const StyledFooterLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  span {
    margin-bottom: 1.5em;
  }

  p {
    margin: 0.5em 0;
  }

  .footer-icons {
    display: flex;
    gap: 2.5em;
    margin-bottom: 1em;
  }

  .footer-icons svg {
    background-color: #f7f8fb;
    border-radius: 50%;
    padding: 0.3em;
    scale: 2.5;
    color: #838eab;
  }

  @media screen and (min-width: 48em) {
    width: 35%;
  }

  @media screen and (min-width: 64em) {
    width: 25%;

    .footer-copyright {
      flex-direction: row;
    }
  }
`
