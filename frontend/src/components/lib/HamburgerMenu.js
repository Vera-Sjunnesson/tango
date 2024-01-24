import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Divider = styled.span`
  align-self: center;
  background: #ffffff;
  content: " ";
  height: 2px;
  margin: 20px 0px;
  width: 184px;
`

export const HamburgerContainer = styled.div`
  .sidebar {
    height: 1000px;
    width: 100%;
    position: fixed;
    top: 85px;
    z-index: 1050;
    right: -100%;
    background-color: #222222;
    transition: transform .7s ease-in-out;
    -moz-transition: transform .7s ease-in-out;
    -ms-transition: transform .7s ease-in-out;
    -o-transition: transform .7s ease-in-out;
    transition: transform .7s ease-in-out;

    @media (min-width: 350px) and (max-width: 743px) {
      top: 103px;
    }
  
    @media (min-width: 744px) and (max-width: 1279px) {
      top: ${(props) => (props.$Small ? '103px' : '132px')};
    }
  }

  .sidebar.active { 
    transition: transform .7s ease-in-out;
    -moz-transition: transform .7s ease-in-out;
    -ms-transition: transform .7s ease-in-out;
    -o-transition: transform .7s ease-in-out;
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
    z-index: 1050 !important;
    position: absolute;
  }
`

export const HamburgerMenu = ({ isSmall }) => {
  const [toggleSideBar, setToggleSidebar] = useState(false)
  const [anchorClick, setAnchorClick] = useState(false)

  const onToggleMenu = () => {
    setToggleSidebar(!toggleSideBar)
  };

  const onAnchorClick = () => {
    setAnchorClick(true)
    setToggleSidebar(!toggleSideBar)
    setTimeout(() => {
      setAnchorClick(false)
    }, 50);
  };

  return (
    <HamburgerContainer $Small={isSmall}>
      <div>
        <nav>
          <div className="nav-right visible-xs">
            <button
              onClick={onToggleMenu}
              type="button"
              aria-label="Toggle hamburger menu"
              className={toggleSideBar
                ? 'button active' : 'button'}
              id="btn">
              <div className="bar top-mobile" />
              <div className="bar middle" />
              <div className="bar bottom-mobile" />
            </button>
            {anchorClick && (
              <button
                onClick={onToggleMenu}
                type="button"
                aria-label="Toggle hamburger menu"
                className={toggleSideBar
                  ? 'button active' : 'button'}
                id="btn">
                <div className="bar top-mobile" />
                <div className="bar middle" />
                <div className="bar bottom-mobile" />
              </button>
            )}
          </div>
          <div
            style={{ display: anchorClick ? 'none' : '' }}
            className={toggleSideBar ? 'sidebar active' : 'sidebar'}>
            <ul className="sidebar-list">
              <li
                className={toggleSideBar
                  ? 'sidebar-item active'
                  : 'sidebar-item'}>
                <a
                  href="https://www.tangonorte.com/page.php?id=main"
                  rel="noreferrer"
                  className="sidebar-anchor"
                  to="/"
                  aria-label="Log In"
                  onClick={onAnchorClick}>
                  LOGGA IN
                </a>
              </li>
              <li
                className={toggleSideBar
                  ? 'sidebar-item active' : 'sidebar-item'}>
                <a
                  href="https://www.tangonorte.com/register.php"
                  rel="noreferrer"
                  className="sidebar-anchor"
                  aria-label="Register"
                  onClick={onAnchorClick}>
                    BLI MEDLEM
                </a>
              </li>
              <li
                className={toggleSideBar
                  ? 'sidebar-item active' : 'sidebar-item'}>
                <NavLink
                  className="sidebar-anchor"
                  to="/om"
                  onClick={onAnchorClick}>
                  OM TANGO NORTE
                </NavLink>
              </li>
              <Divider />
              <li
                className={toggleSideBar
                  ? 'sidebar-item active' : 'sidebar-item'}>
                <NavLink
                  className="sidebar-anchor"
                  to="/kalendarium"
                  onClick={onAnchorClick}>
                  KALENDARIUM
                </NavLink>
              </li>
              <li
                className={toggleSideBar
                  ? 'sidebar-item active' : 'sidebar-item'}>
                <NavLink
                  className="sidebar-anchor"
                  to="/aktuellt"
                  onClick={onAnchorClick}>
                  AKTUELLT
                </NavLink>
              </li>
              <li
                className={toggleSideBar
                  ? 'sidebar-item active' : 'sidebar-item'}>
                <NavLink
                  className="sidebar-anchor"
                  to="/om-tango"
                  onClick={onAnchorClick}>
                  OM TANGO
                </NavLink>
              </li>
              <li
                className={toggleSideBar
                  ? 'sidebar-item active'
                  : 'sidebar-item'}>
                <NavLink
                  className="sidebar-anchor"
                  to="/"
                  onClick={onAnchorClick}>
                  HEM
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </HamburgerContainer>
  );
}