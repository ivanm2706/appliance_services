import React from 'react';
import { NavLink } from 'react-router-dom';
import { Frame } from '../components/Frame';
import { ImageTextModule } from '../components/ImageTextModule';
import Tel from '../components/Tel/Tel';

const imageStyle = {
  backgroundImage: 'url("./images/about-us-page-street.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const textAboutCompany = [
  'At Memphis Appliance Services, we base our entire business on integrity and quality. You see, since the beginning of our work careers, our family has been involved in repairing various appliances. We like a good challenge, and figuring out the puzzle of these appliances is a great way to help improve the lives of the folks of Memphis, TN. After all, we live, work, and play here in the community. We want to make you proud.',
  'In our experience, we have learned the value of not only a good home but an appliance that works well for you. Proper maintenance and repair are an essential part of making your home run smoothly.',
];

export function CompanyPage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            Getting to Know
            <span>Memphis Appliance Services</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule p={textAboutCompany}>
              <span className="imageTextModule__frame" style={imageStyle} />
            </ImageTextModule>
          </div>

          <Frame icon={<span className="block__icon" />} mode="light">
            <div className="slogan">
              <p className="slogan__title-slogan">
                What sets us apart from big box store appliance repair is not
                just our attention to detail, it’s also because we are a
                personal repair service who focuses on the needs of your
                individual home.{' '}
              </p>
              <div className="slogan__img-slogan">
                <img
                  className="slogan__image-slogan"
                  src="./images/slogan.svg"
                  title="slogan"
                  alt="slogan"
                />
              </div>
            </div>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--page">
          <Frame mode="white">
            <h3 className="page__titleH3">
              Quality Spare Parts for Appliance Repairs
            </h3>

            <ImageTextModule
              p={[
                'Often a damaged appliance requires a replacement component. The repair will only be durable if we use good-quality parts. The professionals at Memphis Appliance Services, know how to find the best spare parts. And that is good news for you. Furthermore, our team knows which products have performed well in real-life conditions and will use those components in your repairs. That is another instance where our experience is to your benefit.',
                'Our team can find good-quality parts for all kinds of appliances and brands. We have spare parts for dishwashers, freezers, refrigerators, garbage disposals, ovens, dryers, and other appliances. No matter what kind of repair you need, our team can help.',
              ]}
            >
              <span
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/garbage-disposal-installation-repair-section.jpg")',
                }}
              />
            </ImageTextModule>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10 container--pb-mainSection">
          <h2 className="page__title">
            At-Home with
            <span>Memphis Appliance Services</span>
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
        <div className="container container--page container--mb-35">
          <Frame mode="dark">
            <div className="callUs callUs--white">
              <p>
                If you want to learn more about our appliance repair in Memphis,
                TN, please don’t hesitate to call us at
              </p>
              <Tel classes="callUs__tel" />
              <p>or use our</p>
              <NavLink to="/contact" className="callUs__contact" replace>
                contact form
              </NavLink>
              <p>to reach us.</p>
            </div>
          </Frame>
        </div>
      </section>
    </>
  );
}
