import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`

body, html {
  font-family: 'proxima-nova-extra-condensed', sans-serif;
  block-size: fit-content;
  height: 100%;
  overscroll-behavior: none;
  background: var(--primary-color);
}
  
h1 {
  color: var(--primary-color);
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.408px;
  margin-bottom: 6.5px;

  @media (min-width: 744px) and (max-width: 1280px) {
    font-size: 52px;
    line-height: 51px;
    font-weight: 300;
    color: var(--primary-color);
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    line-height: 51px;
    font-weight: 300;
    color: var(--primary-color);
  }
}
  
  h2 {
    font-size: 20px;
    line-height: 43.2px;
    color: var(--primary-color);
    font-weight: 500;
    background: #0000007a;
    padding: 2px 10px;

    @media (min-width: 744px) and (max-width: 1280px) {
      font-size: 25px;
    }
  
    @media (min-width: 1280px) {
      font-size: 25px;
    }
}
  
h3 {
  font-size: 16px;
  line-height: 32.4px;
  color: var(--secondary-color);
}
  
  h4 {
  font-size: 30px;
  color: black;
  font-weight: 700;
  margin-bottom: 10px;
  }

h5 {
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 5px;
  color: black;
  font-weight: 700;
}
  
p {
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 22.5px;
  letter-spacing: -0.408px;
  text-align: left;
  font-family: "utopia-std", serif;
  font-weight: 400;
  font-style: normal;  

  @media (min-width: 744px) and (max-width: 1280px) {
    color: var(--primary-color);
  }

  @media (min-width: 1280px) {
    color: var(--primary-color);
  }
}

button {
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: fit-content;
  cursor: pointer;
}

/* a {
  text-decoration: none;
  color: var(--secondary-color);
} */

article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
}

article img {
  width: 100%;
  object-fit: cover;
}

.svg-animation {
  min-height: 100vh !important;
  height: 100vh !important;

  @media (min-width: 744px) and (max-width: 1279px) {
    min-width: 120%!important;
    width: 120%!important;
    min-height: auto!important;
    height: auto!important;
  }
}
`