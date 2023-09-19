import React from 'react'
import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 161px;
`

export const Logo = styled.img`
  height: 124px;
  margin: 10px;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src={`${process.env.PUBLIC_URL}/assets/norte-logo2.svg`}
        alt="Tango Norte Logo" />
    </HeaderContainer>
  )
}