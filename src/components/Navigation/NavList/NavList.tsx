import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { services } from '../../../utils/Services';
import { navigationList } from '../../../utils/NavigationList';
import classNames from 'classnames';

type Props = {
  isMobile: boolean;
};

export default function NavList({ isMobile }: Props) {
  const navListHover = useRef<HTMLUListElement | null>(null);
  const [isActiveServisesMenu, setIsActiveServisesMenu] = useState(false);
  const [isActiveServises, setIsActiveServises] = useState(false);
  const { pathname } = useLocation();

  const handlerShowElement = () => {
    if (isMobile || !navListHover.current) {
      return;
    }

    navListHover.current.style.visibility = 'visible';
    navListHover.current.style.opacity = '1';
  };

  const handlerHideElement = () => {
    if (isMobile || !navListHover.current) {
      return;
    }

    navListHover.current.style.visibility = 'hidden';
    navListHover.current.style.opacity = '0';
  };

  useEffect(() => {
    if (
      pathname.substring(1) !== '' &&
      services.some((item) => item.url.includes(pathname.substring(1)))
    ) {
      setIsActiveServises(true);
    } else {
      setIsActiveServises(false);
    }

    setIsActiveServisesMenu(false);
  }, [pathname]);

  return (
    <nav
      className={classNames({
        nav: true,
        'nav--tabletDesctop': !isMobile,
      })}
    >
      <ul
        className={classNames({
          nav__list: true,
          'nav__list--mobile': isMobile,
        })}
      >
        {navigationList.map(({ id, title, url }) => {
          const isServiceLink = url === 'services';

          return !isServiceLink ? (
            <li className="nav__item" key={id}>
              <NavLink
                to={`${url}`}
                replace
                className={({ isActive }) =>
                  classNames({
                    nav__link: true,
                    'nav__link--active': isActive,
                  })
                }
              >
                {title}
              </NavLink>
            </li>
          ) : (
            <li className="nav__item" key={id}>
              <div
                className={classNames({
                  nav__servicesList: true,
                })}
              >
                <NavLink
                  to={`${url}`}
                  replace
                  className={({ isActive }) =>
                    classNames({
                      'nav__link nav__link--services': true,
                      'nav__link--active nav__link--services-active':
                        isActive || isActiveServises,
                    })
                  }
                  onMouseEnter={handlerShowElement}
                  onMouseLeave={handlerHideElement}
                >
                  {title}
                </NavLink>

                {isMobile && (
                  <button
                    type="button"
                    className={classNames({
                      'button button--next': true,
                      'button--nextActive': isActiveServisesMenu,
                    })}
                    onClick={() => setIsActiveServisesMenu((state) => !state)}
                  />
                )}
              </div>
              <ul
                ref={navListHover}
                className={classNames({
                  nav__list: true,
                  'nav__list--hover': !isMobile,
                  'nav__list--mobile nav__list--services': isMobile,
                  'nav__list--servicesOpen': isActiveServisesMenu,
                })}
                onMouseEnter={handlerShowElement}
                onMouseLeave={handlerHideElement}
              >
                {services.map((service) => (
                  <li className="nav__item" key={service.id}>
                    <NavLink
                      to={`services/${service.url}`}
                      replace
                      className={({ isActive }) =>
                        classNames({
                          nav__link: true,
                          'nav__link--active': isActive,
                        })
                      }
                      onClick={handlerHideElement}
                    >
                      {service.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
