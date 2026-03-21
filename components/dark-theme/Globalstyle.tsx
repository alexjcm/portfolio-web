import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
    font-family: "Yanone Kaffeesatz", sans-serif;
  }
  .navbarLight .navbarNav .navLink {
    color:  ${({ theme }) => theme.link};
  }
  h1,h2,h3,h4,h5,h6,p {
    color: ${({ theme }) => theme.text};
  }
  .purple, .mainName {
    color: ${({ theme }) => theme.accent};
  }
  .contactInfo {
    color:  ${({ theme }) => theme.link};
  }
  .projectHeading, .cardTitle, .iconTechColor {
    color:  ${({ theme }) => theme.accent};
  }
`;
