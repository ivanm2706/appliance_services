import React, { ReactNode } from 'react';

type Props = {
  icon?: ReactNode;
  children?: ReactNode;
  mode?: 'light' | 'dark' | 'white';
};

export function Frame({ icon, children, mode }: Props) {
  return (
    <div className={`frame frame--${mode}`}>
      {icon}

      <div className="frame__shaddow frame__border-radius">
        <div className="frame__background">
          <div className="frame__border">
            <div className="frame__padding">
              <div className="frame__position">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
