import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from '../../types/Navigation';
import { Service } from '../../types/Service';

type Props = {
  service: string | undefined;
  lastObjNav: Navigation | Service | null;
};

export function History({ service, lastObjNav }: Props) {
  return (
    <div className="history">
      <ul className="history__list">
        <li className="history__item">
          <NavLink to="/" replace className="history__link">
            Home
          </NavLink>
        </li>

        {service && (
          <li className="history__item">
            <NavLink to="/services" className="history__link" replace>
              Appliance Services
            </NavLink>
          </li>
        )}

        <li className="history__item">{lastObjNav?.title}</li>
      </ul>
    </div>
  );
}
