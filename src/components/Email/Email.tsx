import React from 'react';

type Props = {
  classes: string;
};

export function Email({ classes }: Props) {
  return (
    <>
      <a href="mailto:Max@maxmemphis.com" className={classes}>
        Max@maxmemphis.com
      </a>
    </>
  );
}
