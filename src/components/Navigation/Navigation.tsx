import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleOverflow } from '../../helpers/handlerOverflow';
import { NavHeader } from './NavHeader';
import { NavMobile } from './NavMobile';

function Navigation() {
  const { pathname } = useLocation();
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  useEffect(() => {
    setIsActiveMenuMobile(false);
  }, [pathname]);

  useEffect(() => {
    handleOverflow(isActiveMenuMobile);

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActiveMenuMobile]);

  return (
    <>
      <NavHeader setIsActiveMenuMobile={setIsActiveMenuMobile} />

      <NavMobile
        isActive={isActiveMenuMobile}
        setIsActive={setIsActiveMenuMobile}
      />
    </>
  );
}

export default Navigation;
