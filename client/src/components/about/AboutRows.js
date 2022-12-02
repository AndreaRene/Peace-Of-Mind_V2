import React from 'react';
import '../../utils/css/AboutRows.css';

const AboutRows = ({ heading, text, whisper, image, sections }) => {
  return (
    <section className={'aboutGroup section' + (sections + 1)}>
      <div className="aboutTexts">
        <h2 className="headingText">{heading}</h2>
        <p className="bodyText">{text}</p>
        <p className="whisperText">"{whisper}"</p>
      </div>
      <img src={image} alt="images" className="aboutImage" />
    </section>
  );
};

export default AboutRows;
