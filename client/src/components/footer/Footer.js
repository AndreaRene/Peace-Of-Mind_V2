import React from 'react';
import '../../utils/css/Footer.css';

function Footer() {
  return (
    <footer className="flexNoWrap" id="pageFooter">
      <h5 className=""></h5>
      <p className="">
        24/7 Suicide and Crisis Lifeline:{' '}
        <a className="footerLinks" href="tel:988">
          {' '}
          988
        </a>
      </p>
      <p className="">
        24/7 Suicide and Crisis Lifeline Chat:{' '}
        <a className="footerLinks" href="https://988lifeline.org/chat/">
          {' '}
          Lifeline Chat
        </a>
      </p>
    </footer>
  );
}

export default Footer;
