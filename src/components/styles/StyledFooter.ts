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

  span {
    font-weight: 700;
  }

  .footer-copyright {
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-top: 1px solid #d5d9dd;
    padding-top: 2em;
    padding-bottom: 1em;
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
      width: 75%;
      display: flex;
      flex-wrap: nowrap;
      gap: 5em;
    }
  }

  @media screen and (min-width: 90em) {
    width: 100%;

    .footer-copyright {
      width: 100%;
      justify-content: center;
    }
  }
`

export const StyledFooterLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  a {
    text-decoration: none;
    transition: 0.4s;
  }

  a:hover {
    scale: 1.1;

    p {
      color: #00a9ff;
    }
  }

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
    margin-left: 1em;
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

  @media screen and (min-width: 90em) {
    width: fit-content;
    margin-bottom: 2em;
  }
`
