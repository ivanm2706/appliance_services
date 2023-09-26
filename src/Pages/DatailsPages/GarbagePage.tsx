import React from 'react';
import { NavLink } from 'react-router-dom';
import { Frame } from '../../components/Frame';
import { ImageTextModule } from '../../components/ImageTextModule';
import { PicturesBlock } from '../../components/PicturesBlock';
import Tel from '../../components/Tel/Tel';

const garbage = {
  id: 8,
  name: 'garbage',
  nameImg: 'Garbage-Disposal-Repair.jpg',
  contents: [
    'There is no doubt, modern appliances make life convenient, and we rely on them every day. If one of them breaks down or starts to malfunction, it can disrupt our daily life and cause problems. At Memphis Appliance Services, we provide professional repair services for all kinds of appliances.',
    'Our trained and experienced technicians will make sure your damaged device is up and running in no time. So, if you’re looking for reliable appliance repair in Memphis, TN, we’re the right choice for you.',
  ],
};

const imageStyle = {
  backgroundImage: `url("./images/${garbage.nameImg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function GarbagePage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            {garbage.name.toUpperCase()} disposal
            <span>Repair</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule p={garbage.contents}>
              <span className="imageTextModule__frame" style={imageStyle} />
            </ImageTextModule>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10">
          <Frame mode="white">
            <h3 className="page__titleH3">
              Providing Garbage Disposal Repair and Installation
            </h3>

            <div className="container">
              <p className="page__subtitle">
                Do you use your garbage disposal much? Of course, you do. And
                those that do not have one know the disadvantage they are in. In
                the case of a garbage disposal malfunction, you need repair and
                fast!
              </p>

              <p className="page__subtitle">
                No matter the issue with your garbage disposal, the
                professionals at&nbsp;
                <strong>Memphis Appliance Services,</strong>
                &nbsp;have dealt with the same disposal problem before. You see,
                we have seen it all, from sticky, gooey situations and diamond
                rings too. You can rely on the experts at Memphis Appliance
                Services to get the repair or installation done right for you.
              </p>
            </div>

            <div className="container container--mb-35">
              <PicturesBlock
                imageNames={[
                  'Garbage-Disposal-Repair-4.jpg',
                  'Garbage-Disposal-Repair-2.jpg',
                  'Garbage-Disposal-Repair-3.jpg',
                ]}
                text="Replacement of a Garbage Disposal"
              />
            </div>

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
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h3 className="page__titleH3">
            Think You Need Garbage Disposal Repair?
          </h3>
          <p className="page__subtitle">
            When you are concerned about a problem with any of your home’s
            appliances, you need to know whom you can trust to get the repair
            taken care of quickly and efficiently. That is why we pride
            ourselves on professional work with respect for our customers and
            the functionality of their homes.
          </p>

          <div className="container container--mb-30">
            <div className="list">
              <p className="list__title">
                <i>
                  The more common signs determining the need for garbage
                  disposal repair include the following:
                </i>
              </p>
              <ul className="list--block list--block-wrap">
                {[
                  'A leaking disposal',
                  'A jam in the blades',
                  'A clog indicated by a hum and no movement',
                ].map((item) => (
                  <li className="list__item list__item--markOK" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="page__subtitle">
            If you notice any of these issues, call the professional technicians
            at&nbsp;
            <strong>Memphis Appliance Services.</strong>
            &nbsp;We will get your disposal up and running in no time.
          </p>
          <p className="page__subtitle">
            That said, there are times when the cost to repair outweighs the
            unit’s value. In that case, you may need an all-new garbage
            disposal.
          </p>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10">
          <Frame mode="white">
            <h3 className="page__titleH3">
              Quality Spare Parts for Appliance Repairs
            </h3>

            <div className="container container--mb-15">
              <ImageTextModule
                p={[
                  'Often a damaged appliance requires a replacement component. The repair will only be durable if we use good-quality parts. The professionals at Memphis Appliance Services, know how to find the best spare parts. And that is good news for you. Furthermore, our team knows which products have performed well in real-life conditions and will use those components in your repairs. That is another instance where our experience is to your benefit.',
                  'Our team can find good-quality parts for all kinds of appliances and brands. We have spare parts for dishwashers, freezers, refrigerators, garbage disposals, ovens, dryers, and other appliances. No matter what kind of repair you need, our team can help.',
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
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h3 className="page__titleH3">
            You Can Trust Our Professionalism at Memphis Appliance Services
          </h3>

          <p className="page__subtitle">
            Trust the experts at Memphis Appliance Services to tell you whether
            you need a repair or new disposal installation. Your 100%
            satisfaction is our priority.
          </p>

          <p className="page__subtitle">
            We will send expert technicians to your location in fully equipped
            vans. They have everything they need to carry out the repair
            promptly and ensure your garbage disposal is running well or
            replaced.
          </p>

          <p className="page__subtitle">
            We like to reach our clients and resolve the problem quickly.
            Additionally, most of our service calls are handled the same day as
            the request. Suppose the day’s schedule is already full. In that
            case, our team will arrange for the earliest possible appointment to
            ensure no significant delay in repairs.
          </p>

          <div className="container container--maxW-800 container--center">
            <div className="callUs">
              <p>
                To learn more about the appliance repair and installation we
                provide in Memphis, TN, don’t hesitate to call our staff at
                Memphis Appliance Services at
              </p>
              <Tel classes="callUs__tel" />
              <p>or use our</p>
              <NavLink to="/contact" className="callUs__contact" replace>
                contact form
              </NavLink>
              <p>to reach us.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GarbagePage;
