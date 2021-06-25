/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react';

const locationURL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2437.0537664867334!2d4.8532797!3d52.3513101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e2039dd86d49%3A0xf9773d071cb8cfca!2sZeilstraat%2012%2C%201075%20SG%20Amsterdam!5e0!3m2!1sen!2snl!4v1624635760018!5m2!1sen!2snl';

const Map = () => {
  return (
    <div style={{ height: '20rem', maxHeight: '30vh', width: '100%' }}>
      <iframe
        src={locationURL}
        style={{ border: '0', width: '100%', height: '100%' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};
// 52.3513101,4.8532797,17
export default Map;
