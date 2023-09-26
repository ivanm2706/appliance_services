import React from 'react';
import { NavLink } from 'react-router-dom';
import { Frame } from '../../components/Frame';
import { ImageTextModule } from '../../components/ImageTextModule';
import { PicturesBlock } from '../../components/PicturesBlock';
import Tel from '../../components/Tel/Tel';

const partsRepair = [
  'Gas Range Repair',
  'Electric Range Repair',
  'Wood Stove Repair',
  'Glass Top Stove Repair',
  'And more!',
];
const ourTeamQualifications = [
  'Expert Service & Quality Repairs',
  'Always Prepared',
  '15+ years of appliance repair experience',
  'Attention to detail is evident in all our work',
  'Same-day service is available',
  'Quick turnaround & personal service.',
];

const oven = {
  id: 5,
  name: 'oven',
  nameImg: 'stove-repair-intro-image.jpg',
  contents: [
    'At Memphis Appliance Services, we don’t ever want dinner to get cold. After all, mealtime is what brings families together. So, don’t miss a single meal because of a broken appliance.  If your oven has been acting up lately or if one of your burners is not working, you can count on Memphis Appliance Services for oven and stove repair.',
  ],
};

const imageStyle = {
  backgroundImage: `url("./images/${oven.nameImg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function OvenPage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            {oven.name.toUpperCase()}
            <span>Repair</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule
              p={oven.contents}
              contact={
                <div className="callUs">
                  <NavLink to="/contact" className="callUs__contact" replace>
                    Contact us today to get it repaired before dinner.
                  </NavLink>
                </div>
              }
            >
              <span className="imageTextModule__frame" style={imageStyle} />
            </ImageTextModule>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10">
          <Frame mode="white">
            <ImageTextModule
              p={[
                'Whether covered by warranty or not, we specialize in servicing electric, glass top, and gas ranges. Our team of skilled technicians is dedicated to promptly resolving any issues with your oven or stove, minimizing disruption to your mealtime routines. We recognize the significance of a smoothly functioning kitchen, catering to the needs of both home cooks and professional chefs. Our efficient service aims to ensure that your appliance is up and running in time for your next culinary endeavor, reaffirming our commitment to keeping your cooking experience uninterrupted and enjoyable.',
              ]}
              pStyleSecond
            >
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/Jenn-Air-range-bad-control-board-0-1024x1024.jpg")',
                  backgroundSize: 'contain',
                }}
              />
            </ImageTextModule>

            <div className="callUs">
              <p>
                To learn more about the appliance repair and installation we
                provide in Memphis, TN, please don’t hesitate to call us at
              </p>
              <p>or use our</p>
              <NavLink to="/contact" className="callUs__contact" replace>
                contact form
              </NavLink>
              <p>
                to reach us. You can easily book and schedule your repair right
                away.
              </p>
            </div>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h3 className="page__titleH3">
            Experience Matters with Oven and Stove Repair
          </h3>

          <p className="page__subtitle">
            With more than 15+ years of in-the-field experience, our
            professional repair technicians can handle any oven and stove
            repair. Here are some of the units we fix for the clients of Memphis
            each week.
          </p>

          <div className="container container--mb-15">
            <div className="list">
              <p className="list__title">
                Our team promises the following standards of service for all our
                Memphis clients:
              </p>
              <ul className="list--block list--block-wrap">
                {partsRepair.map((item) => (
                  <li className="list__item list__item--markOK" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="page__subtitle">
            The Memphis Metro area can rest assured, whatever the issue you’re
            having with your oven or cooktop; we will be there right away to
            take care of it.
          </p>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-30">
          <PicturesBlock
            imageNames={[
              'Jenn-Air-range-bad-control-board-2-600x600.jpg',
              'Jenn-Air-range-bad-control-board-3-600x600.jpg',
              'Jenn-Air-range-bad-control-board-1-600x600.jpg',
            ]}
            text="Jenn-Air range bad control board, now it’s back in business."
          />
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10">
          <Frame mode="white">
            <h3 className="page__titleH3">
              Oven and Stove Repair Common Issues
            </h3>

            <div className="container container--center">
              <p className="page__subtitle">
                Memphis Appliance Services sees appliance issues and failures
                every day. That is a lot of experience when you consider we have
                15 years in the field. Here are a few of the problems we have
                taken note of over the years.
              </p>
            </div>

            <ImageTextModule
              p={[
                '– Traditional coil ranges can be tested to see if the hook-up is active by trading the unit with another from the stove. If it works, the problem is with the burner itself. In any case, we can trade the burner out or replace the switch receptacle. It is always better to let a professional handle electrical and appliance repair.',
                '– A bad switch can also cause the burner to stay at one constant temperature. No one wants to burn dinner with a control that stays on high.',
              ]}
              strongStartTextForEveryP={[
                'Burner Failure ',
                'When the burner overheats',
              ]}
              orderNumberForList={[1, 2]}
              pStyleSecond
              isPictureLeft
            >
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/gallery-atlanta-appliance-repair-20210408_154236-1024x485.jpg")',
                  backgroundSize: 'contain',
                }}
              />
            </ImageTextModule>

            <ImageTextModule
              p={[
                '– A false “hot-surface” indicator can be another indicator of a bad switch.',
                '– Occasionally, the self-clean cycle will be triggered, and the lock will activate. In that case, there could be a malfunctioning lock, internal clock, or oven control. But we can fix that too.',
                '– This may mean the function selector or latch has broken.',
                '– There may be several different mechanical issues depending on the type of oven you have. You will most likely need to replace the bake or broil heating elements to get it going again. In our professional opinion, this requires our experience and a professional opinion.',
              ]}
              strongStartTextForEveryP={[
                'If the surface indicator is incorrect ',
                'If the oven door won’t open ',
                'When self-cleaning won’t clean',
                'When the oven just won’t turn on or heats irregularly',
              ]}
              orderNumberForList={[3, 4, 5, 6]}
              pStyleSecond
            >
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/gallery-atlanta-appliance-repair-20210408_154337-485x1024.jpg")',
                }}
              />
            </ImageTextModule>

            <p className="page__subtitle">
              Furthermore, we have been doing this for a long time and stay up
              to date with all the modern amenities available in the new oven
              and stove technology being released. When you call on the
              professionals at Memphis Appliance Services, our experts will know
              exactly how to fix your oven or stove, no matter the brand name or
              age.
            </p>

            <p className="page__subtitle">
              Memphis, don’t wait another minute. The kitchen is the center of
              the home, and the stove keeps it running. Let us help you by
              fixing it.
            </p>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h3 className="page__titleH3">Repairing Ovens and Stoves for You</h3>

          <p className="page__subtitle">
            We think you’d agree; there is never a good time for appliances to
            fail. That is why&nbsp;
            <strong>Memphis Appliance Services</strong>
            &nbsp;is always on the job. No appliance repair or installation is
            too big or too small for our experienced professionals.&nbsp;
            <strong>Memphis Appliance Services</strong>
            &nbsp;is known for quality services, exceptional efficiency, and the
            highest level of professionalism.
          </p>

          <div className="list">
            <p className="list__title">
              <em>
                We promise the following standards of service for all our
                clients:
              </em>
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
              <p className="page__text3">
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

export default OvenPage;
