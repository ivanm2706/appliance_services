/* eslint-disable react/prop-types */
import React from 'react';

type Props = {
  classes: string;
};

function Tel({ classes }: Props) {
  return (
    <>
      <a href="tel:9015629437" className={classes}>
        &#40;901&#41; 562-9437
      </a>
    </>
  );
}

export default Tel;
