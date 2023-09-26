import React from 'react';

type Props = {
  imageName: string;
  text?: string;
};

export function PhotoBlock({ imageName, text }: Props) {
  return (
    <>
      <div className="photoBlock">
        <div className="photoBlock__wrapper">
          <img
            className="photoBlock__image"
            src={`./images/${imageName}`}
            title="before after"
            alt="before after"
          />
        </div>

        {text && <p className="photoBlock__text">{text}</p>}
      </div>
    </>
  );
}
