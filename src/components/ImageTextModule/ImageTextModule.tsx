import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef } from 'react';

type Props = {
  p: string[];
  children: ReactNode;
  contact?: ReactNode;
  title?: string;
  titleSpan?: string;
  titleAfterSpan?: string;
  p2?: string;
  p3?: string;
  withoutFrames?: boolean;
  pStyleSecond?: boolean;
  strongStartTextForEveryP?: string[];
  orderNumberForList?: number[];
  isPictureLeft?: boolean;
  markForList?: boolean;
};

export function ImageTextModule({
  p,
  children,
  title,
  titleSpan,
  titleAfterSpan,
  contact,
  withoutFrames,
  pStyleSecond,
  strongStartTextForEveryP,
  orderNumberForList,
  markForList,
  isPictureLeft,
}: Props) {
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);

  const adjustChildHeights = () => {
    if (div1Ref.current) {
      const elem1 = div1Ref.current;

      if (div2Ref.current) {
        const elem2 = div2Ref.current;

        elem2.style.height = `${elem1.offsetHeight}px`;
      }
    }
  };

  useEffect(() => {
    adjustChildHeights();
    window.addEventListener('resize', adjustChildHeights);

    return () => {
      window.removeEventListener('resize', adjustChildHeights);
    };
  }, []);

  return (
    <div
      className={classNames({
        imageTextModule: true,
        'imageTextModule--img-right': isPictureLeft,
      })}
    >
      <div ref={div2Ref} className="imageTextModule__img">
        <span
          className={classNames({
            imageTextModule__wrapper: true,
            'imageTextModule__wrapper--frame': !withoutFrames,
          })}
        >
          {children}
        </span>
      </div>
      <div ref={div1Ref} className="imageTextModule__content">
        {(title || titleSpan || titleAfterSpan) && (
          <h3 className="imageTextModule__title">
            {title}
            <span>{titleSpan}</span>
            {titleAfterSpan}
          </h3>
        )}

        <div
          className={classNames({
            imageTextModule__subtitles: true,
            'imageTextModule__subtitles--markedList': markForList,
          })}
        >
          {p.map((text, i) => {
            const phrase = 'Memphis Appliance Services';
            const parts = text.split(phrase);

            return (
              <div
                key={text}
                className={classNames({
                  'imageTextModule__order-block': orderNumberForList,
                })}
              >
                {orderNumberForList && (
                  <span className="imageTextModule__order">
                    {orderNumberForList[i]}
                  </span>
                )}
                <p
                  className={classNames({
                    imageTextModule__subtitle: true,
                    'imageTextModule__subtitle--second': pStyleSecond,
                  })}
                >
                  {strongStartTextForEveryP && (
                    <strong>{strongStartTextForEveryP[i]}</strong>
                  )}
                  {parts.map((partText, index) => (
                    <i key={partText}>
                      {index > 0 && <strong>{phrase}</strong>}
                      {partText}
                    </i>
                  ))}
                </p>
              </div>
            );
          })}
        </div>

        {contact && <div className="container container--mt-20">{contact}</div>}
      </div>
    </div>
  );
}
