import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Tel from '../../Tel/Tel';
import { Logo } from '../../Logo';
import NavList from '../NavList/NavList';

type Props = {
  setIsActiveMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavHeader({ setIsActiveMenuMobile }: Props) {
  const [isBigHeaderLine, setIsBigHeaderLine] = useState(true);

  useEffect(() => {
    const handlerScroll = () => {
      const scrollingElement =
        document.scrollingElement || document.documentElement;
      const { scrollTop } = scrollingElement;

      if (scrollTop > 100) {
        setIsBigHeaderLine(false);
      } else {
        setIsBigHeaderLine(true);
      }
    };

    window.addEventListener('scroll', handlerScroll);

    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return (
    <div className="navBar navBar--header navBar--header-scale">
      <div
        className={classNames({
          navBar__block: true,
          'navBar__block--large': isBigHeaderLine,
        })}
      >
        <div className="container container--page container--pi-10">
          <div className="navBar__content">
            <div className="navBar__logo">
              <Logo isBig={isBigHeaderLine} />
            </div>

            <NavList isMobile={false} />

            <div className="navBar__contacts-menu">
              <Tel classes="miniContact miniContact--phone" />

              <div className="navBar__openMenu">
                <button
                  type="button"
                  className="navBar__openMenuButton"
                  onClick={() => setIsActiveMenuMobile(true)}
                >
                  <div className="navBar__openMenuBlockLines">
                    <span className="navBar__openMenuLine" />
                    <span className="navBar__openMenuLine" />
                    <span className="navBar__openMenuLine" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
