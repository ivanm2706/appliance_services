import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Email } from '../../Email';
import Tel from '../../Tel/Tel';
import NavList from '../NavList/NavList';

type Props = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavMobile({ isActive, setIsActive }: Props) {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.classList.contains('shaddow--open-mobile-navigation')) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div
      className={classNames({
        'shaddow shaddow--mobile-navigation': true,
        'shaddow--open-mobile-navigation': isActive,
      })}
    >
      <nav
        className={classNames({
          'navBar navBar--mobile': true,
          'navBar--mobile-open': isActive,
        })}
      >
        <div className="navBar__closeMobileMenuWrapper">
          <button
            type="button"
            className="button button--menuClose"
            onClick={() => setIsActive(false)}
          />
        </div>

        <NavList isMobile />

        <div className="navBar__contacts">
          <div className="container container--pi-10">
            <ul className="navBar__contacts-list">
              <li>
                <Tel classes="miniContact miniContact--phone" />
              </li>

              <li>
                <Email classes="miniContact miniContact--mail" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
