import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
const SmartContract = () => {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState('0xFD1929755F73f974648daD00ab491a7C44a00eeD');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text to clipboard: ", err);
    }
  };

  return (
    <>
      <div className=' smart_bg' id='privacy'>
        <Container className=' smart_py position-relative'>
          <div className=' d-flex flex-column justify-content-center align-items-center' data-aos="zoom-in-up">
            <h2 className=' mb-0 ff-manrope fs-48 lh-57 fw-semibold color_tertiary text-center'>
              <span className=' color_emphasis'>$CLAIR</span> Smart Contract Address
            </h2>
            <div className=' d-flex inp_w  text_py w-100'>
              <input type="text" placeholder='0xFD1929755F73f974648daD00ab491a7C44a00eeD' className=' mb-0 ps-2 me-sm-0 me-3  ff-manrope fs-16 fw-semibold lh-24 color_secondary w-100 xyz bg_copy'  onChange={(e) => setText(e.target.value)}/>
              <button className=' mb-0 ff-manrope fs-16 lh-24 fw-bold copy_btn  ' onClick={handleCopy}>{copied? 'Copied!' : 'Copy'} 
                        </button>

            </div>
            <p className=' mb-0 ff-manrope fs-16 lh-24 fw-normal color_lightgray built_w text-center'>
              Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.
            </p>
          </div>
          <div className='ellipse ellipse_3 '></div>
        </Container>
      </div>
    </>
  )
}

export default SmartContract
