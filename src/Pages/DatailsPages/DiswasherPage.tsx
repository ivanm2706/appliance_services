import React from 'react';
import { NavLink } from 'react-router-dom';
import { Frame } from '../../components/Frame';
import { ImageTextModule } from '../../components/ImageTextModule';
import { Line } from '../../components/Line';
import { PicturesBlock } from '../../components/PicturesBlock';
import Tel from '../../components/Tel/Tel';

const issues = [
  'My dishwasher just won’t start.',
  'It isn’t cleaning dishes thoroughly anymore.',
  'Help, the dishwasher is leaking.',
  'Why won’t my dishwasher drain?',
  'My machine is making a funny noise.',
  'Why are the buttons on our dishwasher not working?',
  'The indicator lights are flashing; what could that mean?',
  'My dishwasher keeps overflowing. What should I do?',
  'The detergent dispenser is not working.',
  'Why won’t the door latch work?',
  'It just won’t dry the dishes completely.',
];

const dishwasher = {
  id: 7,
  name: 'dishwasher',
  nameImg: 'dishwasher-repair-intro-image.jpg',
  contents: [
    'Dirty dishes are never something you or your family want to deal with. This is especially true after a large gathering when you want to relax and spend time with your family and guests instead of clanging around the kitchen. If your dishwasher needs service, Memphis Appliance Services is ready! Our technician will be on the way to get your dishwasher running smoothly again.',
    'No matter your dishwasher brand, we will repair it. Today’s dishwashers, like all modern appliances, are sophisticated pieces of machinery. Dishwashers have control boards, pumps, sensors, and more. Occasionally, one or more of these parts may need repair or replacement. It’s important to call on an experienced appliance repair technician to diagnose and repair your dishwasher in Memphis, TN.',
  ],
};

const imageStyle = {
  backgroundImage: `url("./images/${dishwasher.nameImg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export function DiswasherPage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            {dishwasher.name.toUpperCase()}
            <span>Repair</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule p={dishwasher.contents}>
              <span className="imageTextModule__frame" style={imageStyle} />
            </ImageTextModule>
          </div>

          <div className="container container--center">
            <NavLink
              to="/contact"
              className="button button--book button--shake"
            >
              Book Your Inspection
            </NavLink>
          </div>
        </div>
      </section>

      <div className="container container--pi-10 container--page">
        <Line />
      </div>

      <section>
        <div className="container container--page container--pi-10 container--pb-mainSection">
          <PicturesBlock
            imageNames={[
              'Fisher-Paykel-dishwasher-control-board-replacement-2.jpg',
              'Fisher-Paykel-dishwasher-control-board-replacement-1.jpg',
              'Fisher-Paykel-dishwasher-control-board-replacement-3.jpg',
            ]}
            text="Fisher & Paykel dishwasher control board replacement."
          />
        </div>
      </section>

      <div className="container container--pi-10 container--page">
        <Line />
      </div>

      <section>
        <div className="container container--page container--pb-mainSection">
          <h3 className="page__titleH3">Common Dishwasher Repair Issues</h3>

          <div>
            <div className="container container--mb-35">
              <div className="list">
                <ul className="list--block list--block-wrap">
                  {issues.map((item) => (
                    <li className="list__item list__item--markOK" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="container container--center container--maxW-600">
              <div className="callUs">
                <NavLink to="/contact" className="callUs__contact" replace>
                  Contact our knowledgeable team
                </NavLink>
                <p>
                  today for an inspection and maintenance call.&nbsp;
                  <strong>Memphis Appliance Services</strong>
                  &nbsp;will be out ASAP to take a look and recommend a repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page">
          <Frame mode="white">
            <h3 className="page__titleH3">
              This Stinks! Why Your Dishwasher Smells & What Can You Do About It
            </h3>

            <div className="container container--mb-15">
              <ImageTextModule
                p={[
                  'As food particles build up within the dishwasher, it’s not unusual for it to take on a less-than-ideal aroma. Our dishwasher repair service can help cut through the funk, so you don’t have to. In the meantime, here’s what you can do to help out.',
                  'Wipe the dishwasher down and wipe out as much debris as possible. Any leftover food particles will eventually turn odorous, so use a damp cloth or sponge to wipe the interior down as much as possible.',
                ]}
                pStyleSecond
              >
                <span
                  className="imageTextModule__frame"
                  style={{
                    ...imageStyle,
                    backgroundImage:
                      'url("./images/dishwasher-repair-interior-1.jpg")',
                    backgroundSize: 'contain',
                  }}
                />
              </ImageTextModule>
            </div>

            <div>
              <p className="page__text2">
                If your dishwasher still stinks after these steps, then you
                likely have an issue that demands a professional’s touch. The
                experts at&nbsp;
                <strong>Memphis Appliance Services</strong>
                &nbsp;can handle a wide range of appliance repairs, including
                your dishwasher repair.
              </p>

              <p className="page__text2">
                <div className="callUs">
                  <p>
                    Oh, and are you tired of your old dishwasher? Don’t worry –
                    we also do appliance installations, whether you want a new
                    dishwasher or need a new stove or fridge.
                  </p>
                  <NavLink to="/contact" className="callUs__contact" replace>
                    Get in touch with us
                  </NavLink>
                  <p>
                    and ask about our appliance installations or schedule a
                    visit today.
                  </p>
                </div>
              </p>
            </div>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--page container--pb-mainSection container--pi-10">
          <h2 className="page__title">
            Dishwasher Repair Experts You Can Trust
          </h2>

          <div className="container container--center">
            <p className="page__subtitle">
              <strong>Memphis Appliance Services</strong>
              &nbsp;is a trustworthy company with more than 15 years of
              experience in the field. Our experts are always on their toes and
              are committed to delivering high-quality services.
            </p>
          </div>

          <ImageTextModule
            p={[
              'Our adept technicians use the latest methods and are well-versed in new appliance brands. Count on us to resolve a wide array of issues transparently, offering honest estimates and recommending essential repairs or replacements.',
              'With cutting-edge techniques, our technicians handle diverse appliance problems effectively. We maintain open communication through detailed estimates, suggesting necessary repairs or replacements based on your genuine needs.',
            ]}
          >
            <span
              className="imageTextModule__frame"
              style={{
                ...imageStyle,
                backgroundImage:
                  'url("./images/dishwasher-repair-interior-2.jpg")',
              }}
            />
          </ImageTextModule>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10 container--pb-15">
          <Frame mode="dark">
            <div className="container container--maxW-800 container--center">
              <div className="callUs callUs--white">
                <p>
                  If you want to learn more about our appliance repair in
                  Memphis, TN, please don’t hesitate to call us at
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
    </>
  );
}
