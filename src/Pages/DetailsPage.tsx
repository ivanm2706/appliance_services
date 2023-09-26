import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DiswasherPage } from './DatailsPages/DiswasherPage';
import { DryerPage } from './DatailsPages/DryerPage';
import FreezerPage from './DatailsPages/FreezerPage';
import GarbagePage from './DatailsPages/GarbagePage';
import OvenPage from './DatailsPages/OvenPage';
import WashingPage from './DatailsPages/WashingPage';

export function DetailsPage() {
  const location = useLocation();
  const pathPage = location.pathname.split('/').pop();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  switch (pathPage) {
  case 'freezer':
    return <FreezerPage />;

  case 'oven':
    return <OvenPage />;

  case 'dishwasher':
    return <DiswasherPage />;

  case 'dryer':
    return <DryerPage />;

  case 'washing':
    return <WashingPage />;

  case 'garbage':
    return <GarbagePage />;

  default:
    return null;
  }
}
