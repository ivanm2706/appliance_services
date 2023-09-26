import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { benefits } from '../../utils/Benefits';

export default function Benefits() {
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const items = [1, 2, 3, 4];
  const itemRefs: React.RefObject<HTMLDivElement>[] = items.map(() =>
    useRef(null),
  );

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Порог для определения видимости элемента
  };

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      let classAnimated = 'animate--opacity-active';

      if (entry.target.localName === 'div') {
        classAnimated = 'animate--scale-active';
      }

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
    <section className="background background--benefits">
      <span className="shaddow shaddow--open" />
      <div className="container container--page container--pb-80">
        <h3
          ref={h2Ref}
          className={classNames({
            'page__title page__title--benefits animate animate--opacity': true,
          })}
        >
          Why Choose the
          <span>Memphis Appliance Services</span>?
        </h3>
        <div className="container container--pi-10">
          <div className="benefits">
            <div className="benefits__list">
              {benefits.map((benefit, index) => (
                <div
                  data-animate="scale"
                  ref={itemRefs[index]}
                  key={benefit}
                  className={classNames({
                    'benefits__item animate animate--scale': true,
                  })}
                >
                  <p className="benefits__content">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
