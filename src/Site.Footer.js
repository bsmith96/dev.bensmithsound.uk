import React from 'react';
import './App.css';

const logoSize = "70rem";

function SiteFooter() {
  return (
    <div className="container-fluid mt-3 py-3 footer">
      <div className="row justify-content-end align-items-center">
        <div className="col-sm-auto text-align-middle">
          <p className="mb-0">
            <strong>Ben Smith</strong> (He/him)
          </p>
          <p>
            You can contact me at <a href="mailto:ben@bensmithsound.uk" className="text-reset" target="_blank" rel="noreferrer">ben@bensmithsound.uk</a>
          </p>
        </div>
        <div className="col-sm-auto align-items-center">


          {/*  D A N T E  L E V E L  3  */}
          <a
            href="https://www.audinate.com/learning/training-certification/dante-certification-program"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-image ms-3 my-3"
              src="images/other-icons/dante_certified_seal_level3.png"
              alt="Dante certified seal level 3"
              height={logoSize}
            />
          </a>
        </div>
        <div className="col-sm-auto align-items-center">


          {/*  A S D  */}
          <a
            href="https://www.associationofsounddesigners.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-image ms-3 my-3"
              src="images/other-icons/ASDlogo2013_lg.png"
              alt="Association of Sound Designers logo"
              height={logoSize}
            />
          </a>
        </div>
        <div className="col-sm-auto align-items-center">


          {/*  B E C T U  */}
          <a
            href="https://www.bectu.org.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-image my-3"
              src="images/other-icons/Bectu_Logo_Black_RGB-300dpi.png"
              alt="Bectu union logo"
              height={logoSize}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;