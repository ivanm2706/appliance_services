import React from 'react';
import { NavLink } from 'react-router-dom';
import { Frame } from '../../components/Frame';
import { ImageTextModule } from '../../components/ImageTextModule';
import { Line } from '../../components/Line';
import { PhotoBlock } from '../../components/PhotoBlock';
import { PicturesBlock } from '../../components/PicturesBlock';
import Tel from '../../components/Tel/Tel';

const dryerObj = {
  id: 6,
  name: 'dryer',
  nameImg: 'clothes-dryer-intro-img.jpg',
  contents: [
    'Can you even imagine going back to the days of clotheslines? The risk of rain, storms, bird droppings, and more becomes a real problem. And then you have to rewash clothing. Chances are you never even think of those days. But, there are still many things that can go wrong with your dryer, causing you to call for dryer repair. And if you ignore the signs that your dryer needs repair, you could be putting the entire family and home at significant risk.',
    'No doubt, our dryers are an excellent tool for the entire family. They make your clothes fluffier and softer, need less ironing, and dry faster. Keep that dryer running as it should for as long as possible with quality appliance repair from Memphis Appliance Services in Memphis, TN.',
  ],
};

const imageStyle = {
  backgroundImage: `url("./images/${dryerObj.nameImg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export function DryerPage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            {dryerObj.name.toUpperCase()}
            <span>Repair</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule p={dryerObj.contents}>
              <span className="imageTextModule__frame" style={imageStyle} />
            </ImageTextModule>
          </div>

          <div className="container container--center">
            <NavLink
              to="/contact"
              className="button button--book button--shake"
            >
              Book Your Appointment Online
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
              'LG-dryer-kept-spinning-when-everything-was-off-control-board-replaced-1-600x600.jpg',
              'LG-dryer-kept-spinning-when-everything-was-off-control-board-replaced-2-600x600.jpg',
              'LG-dryer-kept-spinning-when-everything-was-off-control-board-replaced-3-600x600.jpg',
            ]}
            text="Control board replaced on LG dryer which kept spinning when everything was off."
          />
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10">
          <Frame mode="white">
            <h3 className="page__titleH3">Signs You Need Dryer Repair</h3>

            <div className="container container--center">
              <p className="page__subtitle">
                To determine whether you need a dryer repair expert, here are a
                few of the more obvious signs you may notice.
              </p>
            </div>

            <ImageTextModule
              p={[
                'A buckle or zipper is a familiar noise. But a really loud noise is not correct. This could indicate that your dryer belt is loose. Call for repair before resuming use.',
                'As soon as there is that familiar smell that something is burning, please shut the dryer off and unplug it immediately. Dryer fires can cause the casing to melt, do internal damage, and even cause a fire in your home. Additionally, be sure to always clean out the filters and have dryer vents cleaned out every year.',
              ]}
              strongStartTextForEveryP={[
                'A loud noise is coming from the dryer. ',
                'There is a burning smell. ',
              ]}
              orderNumberForList={[1, 2]}
              pStyleSecond
            >
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/dryer-repair-maintenance-1.jpg")',
                  backgroundSize: 'contain',
                }}
              />
            </ImageTextModule>

            <ImageTextModule
              p={[
                'When the drum is not spinning, your belt may have damage. In that case, your clothes will not dry. So, call for dryer repair as soon as you notice the problem.',
                'Suppose it takes a couple or more cycles to dry regular clothes. In that case, you could have a broken belt, sensor, or an electrical problem. And running the dryer multiple times costs more energy and money. Call for an immediate repair.',
              ]}
              strongStartTextForEveryP={[
                'The dryer motor is on, but it is not moving. ',
                'The clothes are taking way too long to dry. ',
              ]}
              orderNumberForList={[3, 4]}
              pStyleSecond
              isPictureLeft
            >
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/dryer-repair-maintenance-2-1.jpg")',
                  backgroundSize: 'contain',
                }}
              />
            </ImageTextModule>

            <div className="container container--mb-15">
              <ol start={5} className="list--ordered">
                <li>
                  <strong>
                    The air in the dryer seems more humid than it should.
                  </strong>
                  &nbsp; Blocked vents from lint build-up can cause the wet air
                  to be trapped in the unit. When the condensation has nowhere
                  to go, your clothes will not dry. And the blocked vents can
                  eventually lead to dryer fires.
                </li>
                <li>
                  <strong>
                    The dryer is moving all around the laundry room.
                  </strong>
                  &nbsp; A machine that is no longer level can cause the dryer
                  to seem to move. And this can be a real problem, as it can
                  snap the electrical and condensate lines. Call to get the
                  dryer balanced and keep it in its place.
                </li>
                <li>
                  <strong>It just won’t turn on anymore.</strong>
                  &nbsp; If it is still plugged in and the door latches, there
                  may be an electrical problem causing the machine not to turn
                  on. Then, there are all sorts of places to check that your
                  dryer repair expert will be well versed in.
                </li>
              </ol>
            </div>

            <div className="callUs">
              <p>
                <i>Have more questions or issues we did not bring up?</i>
              </p>
              <p>or use our</p>
              <NavLink to="/contact" className="callUs__contact" replace>
                <i>Contact us</i>
              </NavLink>
              <p>
                <i> for more information.</i>
              </p>
            </div>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10 container--pb-mainSection">
          <h3 className="page__titleH3">
            Quality Repair Parts for Dryer Repair
          </h3>

          <div className="container container--mb-15">
            <PicturesBlock
              imageNames={[
                'heating-element-whirlpool-dryer-1-600x600.jpg',
                'heating-element-whirlpool-dryer-2-600x600.jpg',
                'heating-element-whirlpool-dryer-4-600x600.jpg',
              ]}
              text="Heating element replacement on Whirlpool dryer"
            />
          </div>

          <p className="page__subtitle">
            Often a broken dryer requires a replacement component. The repair
            will only be durable if we use good-quality spares. The
            professionals at&nbsp;
            <strong>Memphis Appliance Services</strong>
            &nbsp;know how to find the best spare parts. And that is good news
            for you. Furthermore, our team knows which products have performed
            well in real-life conditions and will use those components in your
            repairs. That is another instance where our experience is to your
            benefit.
          </p>

          <p className="page__subtitle">
            Our team can find good-quality spares for all kinds of appliances
            and brands. We have spare parts for dishwashers, freezers,
            refrigerators, garbage disposals, ovens, ranges, and other such
            instruments. No matter what kind of repair you need, our team can
            help.
          </p>

          <PhotoBlock
            imageName="Dryer-Cleaning-B-A-1024x576.jpg"
            text="Dryer cleaning and repair before and after"
          />
        </div>
      </section>

      <div className="container container--pi-10 container--page">
        <Line />
      </div>

      <section>
        <div className="container container--page container--pb-mainSection container--pi-10">
          <h2 className="page__title">
            Trust the Experience of <span>Memphis Appliance Services</span>
          </h2>

          <p className="page__subtitle">
            You can trust the experience of our trained technicians at&nbsp;
            <strong>Memphis Appliance Services.</strong>
            &nbsp;We will send our expert technicians to your location in fully
            equipped vans with everything they need to carry out the repairs
            promptly and ensure your appliance is running well. And in the truck
            are spare parts, equipment, tools, and other such materials, which
            is why most repairs don’t require more than one visit.
          </p>

          <p className="page__subtitle">
            Additionally, most of our dryer repair service calls are handled on
            the same day as the request. We like to reach our clients and
            resolve the problem quickly. Suppose the day’s schedule is already
            full. In that case, our team will arrange for the earliest possible
            appointment to ensure no significant delay in repairs.{' '}
          </p>
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10 container--pb-15">
          <Frame mode="dark">
            <div className="container container--maxW-800 container--center">
              <div className="callUs callUs--white">
                <p>
                  To learn more about the dryer repair and installation we
                  provide in Memphis, TN, don’t hesitate to call our staff
                  at&nbsp;
                  <strong>Memphis Appliance Services</strong>
                  &nbsp;at
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
