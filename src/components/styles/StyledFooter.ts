import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 80%;
  margin: 0 auto;
  margin-top: 2em;

  p {
    color: #647599;
  }

  .footer-top {
    text-align: center;
  }

  img {
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
    gap: 2em;
    margin-bottom: 1em;
  }

  .footer-icons svg {
    background-color: #f7f8fb;
    border-radius: 50%;
    padding: 0.25em;
    scale: 2;
    color: #838eab;
  }
`
