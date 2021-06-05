import React from 'react';
import styles from './index.module.css';
import MenuItem from '../menu-item';
import { mainMenuStructure } from '../../../constants/structures';
import logo from '../../../images/logo.png';
import { useLocation } from 'react-router-dom';

const Sider = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" width="146" height="37" />
      <div className={styles.menu}>
        {mainMenuStructure.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentUrl === item.url;

          return (
            <div
              style={{
                marginBottom: index !== mainMenuStructure.length ? '12px' : '0',
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sider;
