// @flow
import React from 'react';
import { css } from 'emotion';

type Props = {
  avatar: string,
  name: string,
  cyfRole: string,
};

const container = css({
  p: {
    margin: '0',
  },
});

const avatarStyle = css({
  width: '48px',
  maxHeight: '48px',
  borderRadius: '50%',
  verticleAlign: 'middle',
});

const textContainer = css({
  display: 'inline-block',
  verticalAlign: 'middle',
  paddingLeft: '8px',
});

const imgHelper = css({
  verticalAlign: 'middle',
  display: 'inline-block',
  height: '100%',
});

const ProfileSnippet = ({ avatar, name, cyfRole }: Props) => (
  <div className={container}>
    <div className={css({ height: '56px', display: 'inline-block' })}>
      <span className={imgHelper} />
      <img
        className={avatarStyle}
        src={avatar}
        alt={`Avatar for Code Your Future volunteer ${name}`}
      />
    </div>
    <div className={textContainer}>
      <p>{name}</p>
      <p>{cyfRole}</p>
    </div>
  </div>
);

export default ProfileSnippet;
