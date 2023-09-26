import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { CompanyPage } from './Pages/CompanyPage';
import { ContactPage } from './Pages/ContactPage';
import { DetailsPage } from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import Page from './Pages/Page';
import ServicesPage from './Pages/ServicesPage';

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />

        <Route
          path="*"
          element={
            <div className="notification notification--error">
              <p>Page not found</p>
            </div>
          }
        />

        <Route
          path="/"
          element={
            <Page isHomePage isBlockAdvantages>
              <HomePage />
            </Page>
          }
        />

        <Route path="/services" element={<Page>{<ServicesPage />}</Page>} />

        <Route
          path="/services/:service"
          element={<Page>{<DetailsPage />}</Page>}
        />

        {/* <Route
          path="/blog"
          element={
            <Page>
              <div>blog</div>
            </Page>
          }
        /> */}

        <Route
          path="/company"
          element={
            <Page isBlockAdvantages>
              <CompanyPage />
            </Page>
          }
        />

        <Route
          path="/contact"
          element={
            <Page>
              <ContactPage />
            </Page>
          }
        />
      </Routes>
    </>
  );
};
