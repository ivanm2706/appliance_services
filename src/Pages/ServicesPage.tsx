import React from 'react';
import { NavLink } from 'react-router-dom';
import Benefits from '../components/Benefits/Benefits';
import { Frame } from '../components/Frame';
import { ImageTextModule } from '../components/ImageTextModule';
import Questions from '../components/Questions/Questions';
import { Services } from '../components/Services';
import Steps from '../components/Steps/Steps';
import Tel from '../components/Tel/Tel';

const repair = {
  id: 3,
  name: 'services',
  nameImg: 'oven-stove-repair-section-1024x1024.jpg',
  contents: [
    'There is no doubt, modern appliances make life convenient, and we rely on them every day. If one of them breaks down or starts to malfunction, it can disrupt our daily life and cause problems. At Memphis Appliance Services, we provide professional repair services for all kinds of appliances.',
    'Our trained and experienced technicians will make sure your damaged device is up and running in no time. So, if you’re looking for reliable appliance repair in Memphis, TN, we’re the right choice for you.',
  ],
};

const imageStyle = {
  backgroundImage: `url("./images/${repair.nameImg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function ServicesPage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            Appliance
            <span>Repair</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule p={repair.contents}>
              <span className="imageTextModule__frame" style={imageStyle} />
            </ImageTextModule>
          </div>
        </div>
      </section>

      <Services />

      <section>
        <div className="container container--page container--pi-10">
          <Frame mode="white">
            <h3 className="page__titleH3">Common Appliance Repairs</h3>

            <p className="page__subtitle">
              Today’s appliances are highly efficient and will last for several
              years if they’re maintained well, but they’re not immune to
              damage. These devices can stop working without notice regardless
              of how well-maintained they are. That is why you need prompt
              appliance repair if you experience any of these problems:
            </p>

            <div className="container container--mb-15">
              <ol className="list--ordered">
                <li>
                  The device isn’t switching on even when it is connected to an
                  electrical supply.
                </li>
                <li>
                  It isn’t performing according to expectations. For example,
                  the fridge doesn’t cool as efficiently as it used to.
                </li>
                <li>
                  The appliance is making strange noises or emitting a foul
                  odor.
                </li>
                <li>Your machine is old and develops problems frequently.</li>
              </ol>
            </div>

            <div className="container container--mb-15">
              <ImageTextModule
                p={[
                  'Good news: when your appliances experience these issues, we can help. Our friendly technician will arrive at your home and examine the instrument carefully to determine the root cause of its problems. They will then recommend effective solutions that will get the device up and running in no time.',
                  'However, suppose your appliance is over ten years old. In that case, you may be entering the stage where it is more cost-effective to replace the unit. Then your appliance repair technician can let you know the value of the device you have and the reasons to replace it.',
                ]}
                pStyleSecond
              >
                <span
                  className="imageTextModule__frame"
                  style={{
                    ...imageStyle,
                    backgroundImage:
                      'url("./images/garbage-disposal-installation-repair-section.jpg")',
                    backgroundSize: 'contain',
                  }}
                />
              </ImageTextModule>
            </div>

            <p className="page__subtitle">
              Furthermore,&nbsp;
              <strong>Memphis Appliance Services</strong>
              &nbsp;can install the new one, so it is done right the first
              time.&nbsp;
              <strong>Memphis Appliance Services</strong>
              &nbsp;exceeds expectations and ensures complete satisfaction for
              your appliance services in Memphis.
            </p>

            <div className="container container--center">
              <NavLink
                to="/contact"
                className="button button--book button--shake"
              >
                Book Online
              </NavLink>
            </div>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10 container--pb-mainSection">
          <h2 className="page__titleH3">
            At-Home with Memphis Appliance Services
          </h2>
          <p className="page__subtitle">
            Of course, there’s no need to lug the entire appliance into our
            store. We will send expert technicians to your location in fully
            equipped vans. They will have everything they need to carry out the
            repairs promptly and ensure your appliance is running well. In the
            truck, there are spare parts, equipment, tools, and other materials,
            which is why most repairs don’t require more than one visit.
          </p>
          <p className="page__subtitle">
            Additionally, most of our service calls are handled on the same day
            as the request. We like to reach our clients and resolve the problem
            quickly. Suppose the day’s schedule is already full. In that case,
            our team will arrange for the earliest possible appointment to
            ensure no significant delay in repairs.{' '}
          </p>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10 container--pb-15">
          <Frame mode="dark">
            <div className="container container--maxW-800 container--center">
              <div className="callUs callUs--white">
                <p>
                  To learn more about the appliance repair and installation we
                  provide around Memphis, TN, don’t hesitate to call us at
                </p>
                <Tel classes="callUs__tel" />
                <p>or use our</p>
                <NavLink to="/contact" className="callUs__contact" replace>
                  contact form
                </NavLink>
                <p>to reach us.</p>
              </div>
            </div>
          </Frame>
        </div>
      </section>

      <Benefits />

      <Steps />

      <Questions />
    </>
  );
}

export default ServicesPage;
