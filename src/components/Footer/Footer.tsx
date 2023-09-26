import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import Tel from '../Tel/Tel';
import { Email } from '../Email';
import { sendEmail } from '../../helpers/sendEmail';
import { DataEmailJsType } from '../../types/DataEmailJsType';

export function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlerInputPhone = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(value);
  };

  const handlerInputName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: DataEmailJsType = {
      name,
      phone: +phone.replace(/\D/g, ''),
    };

    sendEmail(data)
      .then((res) => {
        console.log(res);
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <footer>
      <div className="background background--dark">
        <div className="container container--page">
          <div className="footer">
            <Logo isFooter />
            <div className="footer__contacts">
              <ul className="footer__contacts-list">
                <li>
                  <Tel classes="miniContact miniContact--phone" />
                </li>

                <li>
                  <Email classes="miniContact miniContact--mail" />
                </li>

                <li>
                  <p className="miniContact miniContact--shedule">
                    Mon - fri: 09:00-19:00
                    <br />
                    Sat.: 10:00-16:00
                    <br />
                    Sun.: free.
                  </p>
                </li>
              </ul>
            </div>

            <form className="form form--fastContact" onSubmit={handlerSubmit}>
              <h3 className="form__title">Fast Contact</h3>

              <input
                required
                value={name}
                onChange={handlerInputName}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <input
                required
                value={phone}
                onChange={handlerInputPhone}
                type="number"
                name="tel"
                placeholder="Phome number*"
              />

              <button
                type="submit"
                className="button button--book button--long"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
