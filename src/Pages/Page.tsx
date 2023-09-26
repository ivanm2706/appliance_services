import React, { useEffect, ReactNode, lazy, Suspense } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const LazyBenefits = lazy(() => import('../components/Benefits/Benefits'));
const LazySteps = lazy(() => import('../components/Steps/Steps'));
const LazyQuestions = lazy(() => import('../components/Questions/Questions'));

type Props = {
  children: ReactNode;
  isHomePage?: boolean;
  isBlockAdvantages?: boolean;
};

function Page({ children, isHomePage, isBlockAdvantages }: Props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <Header isHomePage={isHomePage || false} />

      <main className="background background--bland">
        {children}

        {isBlockAdvantages && (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyBenefits />
              <LazySteps />
              <LazyQuestions />
            </Suspense>
            {/* <Benefits />

            <Steps />

            <Questions /> */}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Page;
