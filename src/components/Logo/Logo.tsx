import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  isBig?: boolean;
  isFooter?: boolean;
};

export function Logo({ isBig, isFooter }: Props) {
  return (
    <div className="logo">
      <NavLink to="/" replace>
        <img
          className={classNames({
            logo__img: true,
            'logo__img--big': isBig,
            'logo__img--footer': isFooter,
          })}
          src="./images/logo.jpg"
          title="logo"
          alt="logo"
        />
      </NavLink>
    </div>
  );
}
