import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "pinupatil820@gmail.com"; 

    const handleMailTo = () => {
        window.location.href = `mailto:${email}`;
    };

  return (
    <>
      <div id="contact" className="contact-details">
        <div className="container-large">
          <div className="flex about-title w-50">
            <h2>Contact</h2>
            <hr className="hr"></hr>
          </div>
          <div className="flex flex-vertical align-items-center">
            <p className="large-input">
                {email} &nbsp;
                <CopyToClipboard text={email} onCopy={() => setCopied(true)}>
                    <span className="fa fa-copy" style={{cursor: 'pointer'}}></span>
                </CopyToClipboard>
                {copied && <span style={{color: 'green'}}> Copied!</span>}
            </p>
            <button className="mailbtn" onClick={handleMailTo}>
                Write To me &nbsp;&nbsp;<span className="fa fa-envelope"></span>
            </button>
        </div>
        </div>
        <br/>
        <br/>
        <div className="footer">
            <p><b>Created By Prathamesh Patil</b></p>
        </div>
      </div>
    </>
  );
}

export default Contact;
