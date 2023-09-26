import React from 'react';

type Props = {
  imageNames: string[];
  text?: string;
};

export function PicturesBlock({ imageNames, text }: Props) {
  return (
    <>
      <div className="puctures-block">
        {imageNames.map((imageName) => (
          <div className="puctures-block__item" key={imageName}>
            <div className="puctures-block__wrapper">
              <img
                className="puctures-block__img"
                src={`./images/${imageName}`}
                alt="example of equipment repair"
              />
            </div>
          </div>
        ))}
      </div>

      {text && <p className="puctures-block__text">{text}</p>}
    </>
  );
}
