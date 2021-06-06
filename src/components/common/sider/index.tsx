import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import MenuItem from '../menu-item';
import { mainMenuStructure } from '../../../constants/structures';
import logo from '../../../images/logo.png';
import { useLocation } from 'react-router-dom';
import useCheckMobileScreen from '../../../utils/use-check-mobile-screen';
import { ReactComponent as HamburgerIcon } from '../../../icons/hamburger.svg';
import { ReactComponent as CloseIcon } from '../../../icons/mainclose.svg';

const Sider = () => {
  const isMobile = useCheckMobileScreen();

  const [isMenuOpen, setIsMenuOpen] = useState(!isMobile);

  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    setIsMenuOpen(!isMobile);
  }, [isMobile]);

  const renderMenu = () => {
    return (
      <div className={styles.menu}>
        {mainMenuStructure.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentUrl === item.url;

          return (
            <div
              style={{
                marginBottom:
                  index !== mainMenuStructure.length - 1 ? '12px' : '0',
              }}
              key={item.url}
            >
              <MenuItem
                url={item.url}
                title={item.title}
                icon={
                  <span style={{ opacity: isActive ? 1 : 0.4 }}>
                    <Icon />
                  </span>
                }
                isActive={isActive}
                closeMobileMenu={() => {
                  if (isMobile) setIsMenuOpen(false);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <a href="/">
          <img src={logo} alt="logo" width="146" height="37" />
        </a>
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileButton}
          >
            {!isMenuOpen ? <HamburgerIcon /> : <CloseIcon />}
          </button>
        ) : null}
      </div>
      {isMenuOpen ? renderMenu() : null}
      {isMobile && isMenuOpen ? <div className={styles.overlay} /> : null}
    </div>
  );
};

export default Sider;
