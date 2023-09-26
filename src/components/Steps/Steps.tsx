import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { steps } from '../../utils/Steps';

export default function Steps() {
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const items = [1, 2, 3, 4];
  const itemRefs: React.RefObject<HTMLDivElement>[] = items.map(() =>
    useRef(null),
  );

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 1, // Порог для определения видимости элемента
  };

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const classAnimated = 'animate--opacity-active';

      if (entry.isIntersecting) {
        entry.target.classList.add(classAnimated);
      } else {
        entry.target.classList.remove(classAnimated);
      }
    });
  };

  useEffect(() => {
    // Используем общую логику для наблюдения за видимостью
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    itemRefs.forEach((itemRef) => {
      if (itemRef.current) {
        observer.observe(itemRef.current);
      }
    });

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
      itemRefs.forEach((itemRef) => {
        if (itemRef.current) {
          observer.unobserve(itemRef.current);
        }
      });
    };
  }, []);

  return (
    <section className="background background--bland">
      <div className="container container--page container--pi-10 container--pb-mainSection">
        <h3
          ref={h2Ref}
          className={classNames({
            'page__title animate animate--opacity': true,
          })}
        >
          REPAIR
          <span>STAGES</span>
        </h3>

        <div className="steps">
          <div className="steps__list">
            {steps.map(({ step, title, id }, index) => (
              <div
                className={classNames({
                  'steps__item animate animate--opacity': true,
                })}
                key={id}
                ref={itemRefs[index]}
              >
                <div className="steps__number">{step}</div>
                <p className="steps__description">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
