import React from 'react';
import { NavLink } from 'react-router-dom';
import { Frame } from '../../components/Frame';
import { ImageTextModule } from '../../components/ImageTextModule';
import { PhotoBlock } from '../../components/PhotoBlock';
import { PicturesBlock } from '../../components/PicturesBlock';
import Tel from '../../components/Tel/Tel';

const partsRepair = [
  'Thermostats',
  'Evaporators',
  'Compressors',
  'Condenser coils',
  'Fan motors',
  'Water filters',
  'Door switches and door seals',
  'Cold controls',
  'Defrost heaters',
  'And more.',
];

const ourTeamQualifications = [
  'Expert Service and Quality Repairs',
  'We will always be prepared for the job.',
  'Our attention to detail is evident in all our work.',
  'Same-day service is available.',
  'We offer quick turnaround with personal service.',
];

const freezer = {
  id: 4,
  name: 'freezer',
  nameImg: 'refrigerator-AdobeStock.jpeg',
  contents: [
    'Memphis Appliance Services repairs and installs all types of refrigeration, including wine fridges, stand-alone freezers, ice makers, and more, from all the major brands of refrigerators from LG and GE to Kenmore and everything in between.',
    'We are a full-service repair company serving Memphis, TN. You can count on the expertise of our technicians when it comes to side by side, commercial fridges, standard refrigerators, and built-ins. Our work will exceed expectations and ensure complete satisfaction for your refrigerator and freezer maintenance.',
  ],
};

const imageStyle = {
  backgroundImage: `url("./images/${freezer.nameImg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function FreezerPage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            {freezer.name.toUpperCase()}
            <span>Repair</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule p={freezer.contents}>
              <span className="imageTextModule__frame" style={imageStyle} />
            </ImageTextModule>
          </div>

          <div className="container container--center container--maxW-600">
            <div className="callUs">
              <p>
                To learn more about our appliance repair and installation,
                please don’t hesitate to call
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

      <section>
        <div className="container container--page container--pi-10">
          <PhotoBlock
            imageName="Freezer-Coil-B-A-1024x576.jpg"
            text="Freezer Coil Repair and Cleaning"
          />
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h3 className="page__titleH3">Keeping Your Cool with Quality</h3>

          <ImageTextModule
            p={[
              'When your refrigerator or freezer goes kaput, the need is immediate. No one wants all that food to go to waste. So, keep the door shut and call for help from Memphis Appliance Services. We are a local repair and service in Memphis, TN and can repair your refrigerator or freezer quickly. When you need immediate refrigerator repair, we are here to help. We totally understand the inconvenience of a refrigerator on the fritz.',
              'Memphis Appliance Services will be sure to diagnose the issue and make repairs with quality parts. Keeping your food cold is our primary goal when you need a refrigerator repair.',
            ]}
          >
            <span
              className="imageTextModule__frame"
              style={{
                ...imageStyle,
                backgroundImage:
                  'url("./images/refrigerator-repair-interior-2.jpg")',
              }}
            />
          </ImageTextModule>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10">
          <PicturesBlock
            imageNames={[
              'samsung-refridgerator-1.jpg',
              'samsung-refridgerator-2.jpg',
              'samsung-refridgerator-3.jpg',
            ]}
            text="Samsung fridge was not cooling due to drain issues"
          />
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <Frame mode="white">
            <h3 className="page__titleH3">
              Diagnosing your Refrigeration Issue
            </h3>

            <p className="page__subtitle">
              Some refrigerators or freezers are easy to diagnose, and others
              are more difficult. Leaking water or a burnt-out bulb are easy to
              spot,but other situations may be caused by problems that are not
              quite as evident. This is where our years of experience benefit
              you and your appliances.
            </p>

            <p className="page__subtitle">
              Our trained technicians will carefully inspect your refrigerator
              and freezer and correctly diagnose the root of the issue. Then we
              can suggest repair options for your review and consideration. That
              is when the repair can begin.
            </p>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page">
          <h3 className="page__titleH3">
            Quality Parts for Your Refrigerator & Freezer Repair
          </h3>

          <p className="page__subtitle">
            For the fastest possible repairs, our technicians carry replacement
            parts in their truck. If your refrigerator needs the following, we
            most likely have one in the truck. Common repair parts include:
          </p>

          <div className="container container--mb-15">
            <ImageTextModule p={partsRepair} markForList>
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/freezer-repair-interior-2.jpg")',
                }}
              />
            </ImageTextModule>
          </div>

          <div className="container container--center container--maxW-600">
            <div className="callUs">
              <p>
                <strong>Memphis Appliance Services</strong> guarantees the
                quality parts and service you deserve. So, if your fridge is
                giving you grief, give our team a call at
              </p>
              <Tel classes="callUs__tel" />
              <p>or</p>
              <NavLink to="/contact" className="callUs__contact" replace>
                book online
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h3 className="page__titleH3">
            Memphis Appliance Services Handles
            <br />
            Refrigerator Repairs & More
          </h3>

          <p className="page__subtitle">
            There is never a good time for appliances to fail. That is why&nbsp;
            <strong>Memphis Appliance Services</strong>
            &nbsp; is always on the job. And rest assured, no job is too big or
            too small for our experienced professionals. In fact, since our
            founding,&nbsp;
            <strong>Memphis Appliance Services</strong>
            &nbsp; has been known for quality services, exceptional efficiency,
            and the highest level of professionalism.
          </p>

          <div className="list">
            <p className="list__title">
              Our team promises the following standards of service for all our
              Memphis clients:
            </p>
            <ul className="list--block list--block-wrap">
              {ourTeamQualifications.map((item) => (
                <li className="list__item list__item--markOK" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10 container--pb-15">
          <Frame mode="dark">
            <div className="container container--center container--mb-15">
              <p className="text page__text3">
                We are ready for any job, and will manage projects with the
                skill and experience our clients have come to expect from us.
                Please get in touch to learn more about our team, company, or
                details about our services in Memphis, TN.
              </p>
            </div>
            <div className="container container--maxW-800 container--center">
              <div className="callUs callUs--white">
                <p>Call us at</p>
                <Tel classes="callUs__tel" />
                <p>or</p>
                <NavLink to="/contact" className="callUs__contact" replace>
                  Book Online
                </NavLink>
              </div>
            </div>
          </Frame>
        </div>
      </section>
    </>
  );
}

export default FreezerPage;
