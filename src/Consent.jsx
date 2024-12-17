import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './css/Consent.css'

const Consent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [isContinueEnabled, setIsContinueEnabled] = useState(false);

  const handleConsent = (e) => {
    if (e.target.value === "yes") {
      setIsConsentGiven(true);
      setIsContinueEnabled(true);
    } else {
      setIsConsentGiven(false);
      setIsContinueEnabled(false);
    }
  };

  return (
    <div className='consent-container'>
		<h3>Consent to Participate</h3>
		<p>Please review the{' '}<a href="https://docs.google.com/document/d/1TY-wW0HmFZNjaVoUgoYUSgpAZ1-t20c2/view" target="_blank" rel="noopener noreferrer">Consent Information</a>{' '}for details on the study's purpose, data usage, and your rights as a participant.
		</p>
		<p>Do you agree to participate?</p>

		<label>
			<input type="radio" name="consent" value="yes" onChange={handleConsent}/> Yes, I agree
		</label>
		<label>
			<input type="radio" name="consent" value="no" onChange={handleConsent}/> No, I do not agree
		</label>
		<br/>
		<br/>
      	<Link id="continueButton" style={{pointerEvents: isContinueEnabled ? 'auto' : 'none',opacity: isContinueEnabled ? 1 : 0.5,}} to="/Home">Continue</Link>
    </div>
  );
};

export default Consent;
