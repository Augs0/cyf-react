// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import TopSection from '../../components/top-section';
import colombialogo from '../../assets/images/cyf-colombia-logo.png';

const ColombiaText = (
  <div>
    <p>
      Code Your Future is a non-profit organisation supporting refugees with the
      dream of becoming developers. In their journey of interrupted lives,
      unfinished studies and integration challenges, many asylum seekers and
      refugees yearn to update their tech skills, but lack learning
      opportunities. We want to change this by offering a program in which they
      are mentored by professional developers in order to prepare them to be
      able to work as software developers.
    </p>
    <p>
      Launched in the UK in 2017, Code Your Future has now expanded to South
      Africa, under the leadership of co-founders Absolom Mugwagwa and Deon
      Petersen.
    </p>
    <p>
      This is just the beginning and with your help we will be expanding to
      other regions and cities.
    </p>
    <p>
      If you are interested in participating as a{' '}
      <Link to="students">student</Link>,{' '}
      <Link to="volunteers">coach or volunteer</Link>, sign up!
    </p>
    <p>
      For all other inquiries please contact us at{' '}
      <Link to="mailto:colombia@codeyourfuture.io" title="Contact us">
        colombia@codeyourfuture.io
      </Link>
      <br />
      <br />
    </p>
  </div>
);

const Colombia = () => (
  <main>
    <div>
      <img src={colombialogo} alt="Code Your Future Colombia" />
    </div>
    <TopSection title="Code Your Future Colombia" content={ColombiaText} />
  </main>
);

export default Colombia;
