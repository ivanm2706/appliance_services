import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Service } from '../../types/Service';

type Props = {
  service: Service;
};

export function Card({ service: { title, img, url } }: Props) {
  const location = useLocation();
  const urlPath = location.pathname === '/' ? 'services' : location.pathname;

  return (
    <div className="cards__card">
      <div
        className={`cards__card-wrapper cards__card-wrapper--under cards__card-wrapper--${img}`}
      >
        <div className="cards__titles">
          <h3 className="cards__title">{title}</h3>

          <p className="cards__subtitle">repair</p>
        </div>

        <NavLink
          to={`${urlPath}/${url}`}
          replace
          className="button button--card cards__button"
        >
          More details
        </NavLink>
        <span className="shaddow shaddow--open" />
      </div>

      <div
        className={`cards__card-wrapper cards__card-wrapper--over cards__card-wrapper--${img}`}
      >
        <div className="cards__titles cards__titles--over">
          <h3 className="cards__title">{title}</h3>

          <p className="cards__subtitle">repair</p>
        </div>
      </div>
    </div>
  );
}
