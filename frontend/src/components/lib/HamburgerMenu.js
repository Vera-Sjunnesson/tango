import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const HamburgerMenu = () => {
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
    <div>
      <div>
        <nav>
          <div className="nav-right visible-xs">
            <button
              onClick={onToggleMenu}
              type="button"
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
                <NavLink
                  className="sidebar-anchor"
                  to="/"
                  onClick={onAnchorClick}>
                  HEM
                </NavLink>
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
              <li
                className={toggleSideBar
                  ? 'sidebar-item active' : 'sidebar-item'}>
                <a
                  href="https://www.tangonorte.com/register.php"
                  target="_blank"
                  rel="noreferrer"
                  className="sidebar-anchor"
                  onClick={onAnchorClick}>
                    BLI MEDLEM
                </a>
              </li>
              <li
                className={toggleSideBar
                  ? 'sidebar-item active' : 'sidebar-item'}>
                <a
                  href="https://www.tangonorte.com/page.php?id=*"
                  target="_blank"
                  rel="noreferrer"
                  className="sidebar-anchor"
                  onClick={onAnchorClick}>
                    OM TANGO
                </a>
              </li>
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
                <a
                  href="https://www.tangonorte.com/news.php"
                  target="_blank"
                  rel="noreferrer"
                  className="sidebar-anchor"
                  onClick={onAnchorClick}>
                    SAVE THE DATE
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}