import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImageTextModule } from '../ImageTextModule';

const imageStyle = {
  backgroundImage: 'url("./images/pngwing.com_-768x616.png")',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export function Experience() {
  return (
    <section className="background background--light">
      <div className="container container--page container--pi-10 container--pb-mainSection">
        <ImageTextModule
          withoutFrames
          title="We Make It Easy"
          titleSpan="for You"
          p={[
            'Memphis Appliance Services is known for quality services, exceptional efficiency, and the highest level of professionalism. We exceed your expectations and ensure complete satisfaction for your appliance repair services in Memphis, TN.',
            'We are a personal repair service that focuses on the needs of the individual families. When you need your appliance fixed or installed with expertise you can trust, contact us.',
          ]}
          contact={
            <div className="container container--center">
              <NavLink
                to="/contact"
                className="button button--book button--shake"
              >
                Contact us
              </NavLink>
            </div>
          }
        >
          <span style={imageStyle} />
        </ImageTextModule>
      </div>
    </section>
  );
}
