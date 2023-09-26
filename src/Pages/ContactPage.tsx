import React, { useState } from 'react';
import classNames from 'classnames';
import { sendEmail } from '../helpers/sendEmail';

const listRepairInputs = [
  {
    value: 'Refrigerator Repair',
    checked: false,
  },
  {
    value: 'Oven / Range Repair',
    checked: false,
  },
  {
    value: 'Dishwasher Repair',
    checked: false,
  },
  {
    value: 'Dryer Repair',
    checked: false,
  },
  {
    value: 'Washing Machine Repair',
    checked: false,
  },
  {
    value: 'Appliance Installation',
    checked: false,
  },
  {
    value: 'Garbage Disposal Installation or Repair',
    checked: false,
  },
];

export function ContactPage() {
  const [checkboxes, setCheckboxes] = useState(listRepairInputs);
  const [name, setName] = useState({
    value: '',
    error: false,
  });

  const handlerInputName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName({
      error: false,
      value,
    });
  };

  const [email, setEmail] = useState({
    value: '',
    error: false,
  });

  const handlerInputEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((state) => ({
      ...state,
      error: false,
      value,
    }));
  };

  const [phone, setPhone] = useState({
    value: '',
    error: false,
  });

  const getValuePhone = (value: string, remove = false) => {
    let newValue = value.replace(/\D/g, '');

    if (remove) {
      newValue = newValue.substring(0, newValue.length - 1);
    }

    if (newValue.length > 10) {
      return {
        positionMax: 14,
        value: value.substring(0, 14),
      };
    }

    switch (newValue.length) {
    case 1:
      return {
        positionMax: 2,
        value: `(${newValue}__) ___-____`,
      };

    case 2:
      return {
        positionMax: 3,
        value: `(${newValue}_) ___-____`,
      };

    case 3:
      return {
        positionMax: 4,
        value: `(${newValue}) ___-____`,
      };

    case 4:
      return {
        positionMax: 7,
        value: `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          4,
        )}__-____`,
      };

    case 5:
      return {
        positionMax: 8,
        value: `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          5,
        )}_-____`,
      };

    case 6:
      return {
        positionMax: 9,
        value: `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          6,
        )}-____`,
      };

    case 7:
      return {
        positionMax: 11,
        value: `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          6,
        )}-${newValue.substring(6, 7)}___`,
      };

    case 8:
      return {
        positionMax: 12,
        value: `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          6,
        )}-${newValue.substring(6, 8)}__`,
      };

    case 9:
      return {
        positionMax: 13,
        value: `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          6,
        )}-${newValue.substring(6, 9)}_`,
      };

    case 10:
      return {
        positionMax: 14,
        value: `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          6,
        )}-${newValue.substring(6, 10)}`,
      };

    default:
      return {
        positionMax: 1,
        value: '(___) ___-____',
      };
    }
  };

  const handlerInputPhone = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    const valuePhone = getValuePhone(value);

    setPhone((state) => ({
      ...state,
      error: false,
      value: valuePhone.value,
    }));
  };

  const handlerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const valuePhone = getValuePhone(value);

    if (e.key !== 'Backspace') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const number = value.replace(/\D/g, '');

      e.currentTarget.setSelectionRange(valuePhone.positionMax, 14);

      return;
    }

    setPhone((state) => ({
      ...state,
      edit: true,
      value: getValuePhone(value, true).value,
    }));
  };

  const [message, setMessage] = useState('');

  const handlerInputMessage = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(value);
  };

  const resetForm = () => {
    const initialValue = {
      value: '',
      error: false,
    };

    setName({ ...initialValue });
    setEmail({ ...initialValue });
    setPhone({ ...initialValue });
    setMessage('');
    setCheckboxes([
      ...listRepairInputs.map((item) => {
        if (item.checked) {
          return {
            ...item,
            checked: false,
          };
        }

        return item;
      }),
    ]);
  };

  const handlerCheckbox = (i: number, checked: boolean) => {
    const previosCheckboxes = [...checkboxes];

    previosCheckboxes[i].checked = checked;

    setCheckboxes(previosCheckboxes);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let error = false;

    if (name.value === '') {
      error = true;
      setName((state) => ({
        ...state,
        error: true,
      }));
    }

    if (email.value === '') {
      error = true;
      setEmail((state) => ({
        ...state,
        error: true,
      }));
    }

    if (getValuePhone(phone.value).positionMax !== 14) {
      error = true;
      setPhone((state) => ({
        ...state,
        error: true,
      }));
    }

    if (error) {
      return;
    }

    const data = {
      name: name.value,
      email: email.value,
      phone: +phone.value.replace(/\D/g, ''),
      services: checkboxes
        .filter(({ checked }) => checked)
        .map(({ value }) => value)
        .join(', '),
      message,
    };

    sendEmail(data)
      .then((res) => {
        console.log(res);
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <div className="container container--page container--pb-mainSection container--pi-10">
        <h2 className="page__title">
          Contact
          <span>Memphis Appliance Services</span>
        </h2>

        <form className="form form--contactPage" onSubmit={handleSubmit}>
          <div>
            <label className="form__label">
              <p className="form__title">
                Your Name
                <span>*</span>
              </p>
              <input
                className={classNames({
                  form__input: true,
                  'form__input--error': name.error,
                })}
                value={name.value}
                onChange={handlerInputName}
                type="text"
              />
              {name.error && (
                <p className="form__title-error">This field is required.</p>
              )}
            </label>

            <label className="form__label">
              <p className="form__title">
                Email
                <span>*</span>
              </p>
              <input
                className={classNames({
                  form__input: true,
                  'form__input--error': email.error,
                })}
                type="text"
                value={email.value}
                onChange={handlerInputEmail}
              />
              {email.error && (
                <p className="form__title-error">This field is required.</p>
              )}
            </label>

            <label className="form__label">
              <p className="form__title">
                Phone
                <span>*</span>
              </p>
              <input
                className={classNames({
                  form__input: true,
                  'form__input--error': phone.error,
                })}
                value={phone.value}
                onChange={handlerInputPhone}
                onKeyDown={handlerKeyDown}
                type="text"
                placeholder="(___) ___-____"
              />
              {phone.error && (
                <p className="form__title-error">This field is required.</p>
              )}
            </label>
          </div>

          <div>
            <p className="form__title">How Can We Help?</p>
            <ul className="form__list">
              {checkboxes.map(({ value, checked }, i) => (
                <li key={value}>
                  <label className="form__label">
                    <input
                      className="form__checkbox"
                      type="checkbox"
                      name="repair"
                      onChange={(e) => {
                        handlerCheckbox(i, e.target.checked);
                      }}
                      checked={checked}
                      value={value}
                    />
                    <p className="form__title-checkbox">{value}</p>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label className="form__label">
              <p className="form__title">Comment or Message</p>
              <textarea
                className="form__textarea"
                value={message}
                onChange={handlerInputMessage}
              />
            </label>

            <div className="form__wrapper-button">
              <button type="submit" className="button button--book">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
