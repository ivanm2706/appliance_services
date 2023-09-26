import React from 'react';
import { NavLink } from 'react-router-dom';
import { Frame } from '../../components/Frame';
import { ImageTextModule } from '../../components/ImageTextModule';
import { PicturesBlock } from '../../components/PicturesBlock';
import Tel from '../../components/Tel/Tel';

const washingMashine = {
  id: 2,
  name: 'washing',
  nameImg: 'laundry-room-1.jpg',
  contents: [
    'With all that your washing machine does for you, it is no wonder it breaks down from time to time. Maintenance of your home’s appliances is a must for busy families and fast-paced households. That’s where our appliance repair technicians will come to your rescue: Memphis Appliance Services will keep your washer removing stains, dirt, and odor from your clothing.',
    'Household laundry rooms today serve as more than just a room to put those two appliances, the washing machine and the dryer, and perhaps the ironing board too. In many homes, they are the garage entry, the sports equipment center, the mudroom, and the overall command center for your family.',
  ],
};

const imageStyle = {
  backgroundImage: `url("./images/${washingMashine.nameImg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function WashingPage() {
  return (
    <>
      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h2 className="page__title">
            {washingMashine.name.toUpperCase()} machine
            <span>Repair</span>
          </h2>

          <div className="container container--mb-35">
            <ImageTextModule
              p={washingMashine.contents}
              contact={
                <div className="container container--center">
                  <NavLink
                    to="/contact"
                    className="button button--book button--shake"
                  >
                    contact us
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
        <div className="container container--page container--pi-10 container--pb-30">
          <PicturesBlock
            imageNames={[
              'kenmore-washer-repair-1-600x600.jpg',
              'kenmore-washer-repair-leaking-valve-2-600x600.jpg',
              'kenmore-washer-repair-leaking-valve-3-600x600.jpg',
            ]}
            text="Kenmore Washer Repair to replace leaking water valve."
          />
        </div>
      </section>

      <section>
        <div className="container container--page container--pi-10">
          <Frame mode="white">
            <h3 className="page__titleH3">Common Washing Machine Repairs</h3>

            <div className="container container--center">
              <p className="page__subtitle">
                You know the sound; it is a loud booming coming from the laundry
                room that sounds as if the walls are crashing in around you.
                Your washer is off balance. But did you know that each time the
                washer experiences any issue, it damages the unit? Here are a
                few of the more common repairs we see in the field each day.
              </p>
            </div>

            <ImageTextModule
              p={[
                'When the washer is making that horrible crashing and thrashing noise, it is off-balance. You adjust the clothing to be equal weight all around, and it still won’t spin right. In that case, it may need to be balanced, inspected, or leveled out.',
                'Well, that is no good as your washer cannot perform its primary function without water. There could be several reasons the unit will not fill. Check the water supply to the home, then look for leaks at the connections. If those seem to be okay, call a professional. They can check the pressure switches, temperature selector switches, mainboards, and door locks.',
              ]}
              strongStartTextForEveryP={[
                'The washer is crashing and vibrating a bit too much. ',
                'My washer won’t fill with water. ',
              ]}
              orderNumberForList={[1, 2]}
              pStyleSecond
            >
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/gallery-atlanta-appliance-repair-20210402_092407-485x1024.jpg")',
                }}
              />
            </ImageTextModule>

            <div className="container container--mb-15">
              <ol start={3} className="list--ordered">
                <li>
                  <strong>
                    The washing machine is overfilling with water.{' '}
                  </strong>
                  &nbsp; Flooding in the laundry room is no joke. First, turn
                  off the water to the unit, then call for appliance repair.
                  There are several components we can check for you. It may be
                  the pressure switch, the water inlet valve, the mainboard, and
                  more, causing the overfill.
                </li>
                <li>
                  <strong>
                    There is water leaking from my washing machine.
                  </strong>
                  &nbsp; This is one of those problems that can creep up on you
                  and ruin your flooring and more. Front-load washers can dump a
                  lot of water on the floor if they have a problem with the
                  gasket or door locking mechanism. A leaking water supply hose
                  can cause many issues, and clogged drain lines may even be
                  worse. Call a professional for a complete diagnosis right
                  away.
                </li>
                <li>
                  <strong>Why won’t my washer drain?</strong>
                  &nbsp; If the washing machine has a problem with the spin
                  cycle, it will not wash or drain. You may have an issue with
                  the door, locks, motor, belts, transmission, clutch, glides,
                  pulley, or drum roller. With that many parts to consider, call
                  for expert diagnosis and repair.
                </li>
                <li>
                  <strong>Suds are pouring out of my washer.</strong>
                  &nbsp; Over-sudsing can cause a variety of problems, from the
                  classic image of a mountain of froth running out of your
                  washer to leftover suds that stick to your clothes and the
                  inside of the washing machine’s drum after a cycle. Try
                  reducing the detergent you use, and have the drain and pump
                  checked by a professional.
                </li>
                <li>
                  <strong>What is wrong? It won’t turn on at all.</strong>
                  &nbsp; Of course, the first thing to check is that the plug
                  has not come loose from the outlet. After that, there could be
                  several other reasons your washing machine won’t turn on. It
                  could be a problem with the electric or motor board, which are
                  simple replacements.
                </li>
              </ol>
            </div>

            <ImageTextModule
              p={[
                'However, if your washing machine is over ten years old, you may be entering the stage where it is more cost-effective to replace the unit. In that case, your appliance repair technician can let you know the value of the washer you have and the reasons to replace it.',
                'Furthermore, Memphis Appliance Services can install the new one, so it is done right the first time. Memphis Appliance Services exceeds expectations and ensures complete satisfaction for your appliance services in Memphis, TN.',
              ]}
              pStyleSecond
            >
              <span
                className="imageTextModule__frame"
                style={{
                  ...imageStyle,
                  backgroundImage:
                    'url("./images/gallery-atlanta-appliance-repair-20210402_095151-1024x485.jpg")',
                }}
              />
            </ImageTextModule>
          </Frame>
        </div>
      </section>

      <section>
        <div className="container container--pi-10 container--page container--pb-mainSection">
          <h3 className="page__titleH3">Quality Washing Machine Repair</h3>

          <ImageTextModule
            p={[
              'Unfortunately, we need to take a degree of care with our home appliance—yes, one more thing to do. But we promise, going this extra step will help your daily routine run more smoothly. Caring for your appliances is one step you can take to ensure they run as long as their lifespan will allow. Regular cleanings and routine maintenance will help you achieve that goal.',
              'Then, if you need washing machine or dryer repair, contact the experts at Memphis Appliance Services. Our experienced technicians have the tools and the training to pinpoint any problem with your washer or dryer and get your appliance working flawlessly again. We also specialize in other appliance repairs, from stoves to dishwashers.',
            ]}
            pStyleSecond
          >
            <span
              className="imageTextModule__frame"
              style={{
                ...imageStyle,
                backgroundImage: 'url("./images/washing-machine-repair.jpg")',
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
    </>
  );
}

export default WashingPage;
