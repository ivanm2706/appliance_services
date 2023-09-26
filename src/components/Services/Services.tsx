import React from 'react';
import { services } from '../../utils/Services';
import { Card } from '../Card';

export function Services() {
  return (
    <section>
      <div className="background background--bland">
        <div className="container container--page container--pb-mainSection">
          <h2 className="page__title">
            Memphis Appliance
            <span>services</span>
          </h2>
          <div className="container container--pi-10">
            <div className="cards">
              {services.map((service) => (
                <Card service={service} key={service.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
