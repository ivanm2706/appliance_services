import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Questions() {
  const aRefQ = useRef<HTMLAnchorElement | null>(null);
  const divRefQ = useRef<HTMLDivElement | null>(null);
  const pRefQ = useRef<HTMLParagraphElement | null>(null);
  const h3RefQ = useRef<HTMLHeadingElement | null>(null);

  const fakeRef = useRef<HTMLDivElement | null>(null);

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Порог для определения видимости элемента
  };

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (aRefQ.current) {
          aRefQ.current.classList.add('animate--up-active');
        }

        if (divRefQ.current) {
          divRefQ.current.classList.add('animate--move-consultant-active');
        }

        if (pRefQ.current) {
          pRefQ.current.classList.add('animate--move-active');
        }

        if (h3RefQ.current) {
          h3RefQ.current.classList.add('animate--move-active');
        }
      } else {
        if (aRefQ.current) {
          aRefQ.current.classList.remove('animate--up-active');
        }

        if (divRefQ.current) {
          divRefQ.current.classList.remove('animate--move-consultant-active');
        }

        if (pRefQ.current) {
          pRefQ.current.classList.remove('animate--move-active');
        }

        if (h3RefQ.current) {
          h3RefQ.current.classList.remove('animate--move-active');
        }
      }
    });
  };

  useEffect(() => {
    // Используем общую логику для наблюдения за видимостью
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    if (fakeRef.current) {
      observer.observe(fakeRef.current);
    }

    return () => {
      if (fakeRef.current) {
        observer.unobserve(fakeRef.current);
      }
    };
  }, []);

  return (
    <section className="background background--light">
      <div className="container container--page">
        <div className="questions">
          <div className="questions__block">
            <h3
              ref={h3RefQ}
              className={classNames({
                'questions__title animate animate--move animate--move-active':
                  true,
              })}
            >
              Need to discuss your appliance?
            </h3>

            <p
              ref={pRefQ}
              className={classNames({
                'questions__subtitle  animate animate--move': true,
              })}
            >
              We will always be happy to answer your questions!
            </p>

            <NavLink
              ref={aRefQ}
              to="/contact"
              className={classNames({
                'button button--book animate animate--up': true,
              })}
            >
              contact us
            </NavLink>
          </div>
          <div className="questions__images">
            <div className="questions__img-consult-wrapper">
              <div
                ref={divRefQ}
                className={classNames({
                  'questions__consult animate animate--move-consultant': true,
                })}
              >
                <img
                  className="questions__img-consult"
                  src="./images/konsultacija-238x300.png"
                  alt="Konsultacija"
                  srcSet="./images/konsultacija.png 317w, ./images/konsultacija-238x300.png 238w"
                  sizes="(max-width: 317px) 100vw, 317px"
                />
              </div>
            </div>
          </div>
          <span ref={fakeRef} className="questions__fake" />
        </div>
      </div>
    </section>
  );
}
