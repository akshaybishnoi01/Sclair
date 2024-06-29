import React from 'react'
import { Container } from 'react-bootstrap'
const FooterSection = () => {
  return (
    <>
      <div className=' footer_bg' id='whitepaper'>
        <Container className=' footer-py' id='mouse_1'>
          <div className=' d-flex flex-column justify-content-center align-items-center'>
            <p className=' mb-0 ff-manrope fs-60 lh-72 color_emphasis text-center'>
              $CLAIR
            </p>
            <p className=' mb-0 ff-manrope fs-16 lh-24 color_lightgray mw_626 text-center pra3_py'>
              In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
              and Baby Sinclair is wielding it with style. The bad players better watch out;
              the crypto defender is here, armed with memes and ready to act.
            </p>
            <ul className=' d-flex justify-content-center p-0 align-items-center gap_32 mb-0 flex-wrap'>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#about">About</a></li>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#tokenomics">Tokenomics</a></li>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#audit">Audit</a></li>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#roadmap">Roadmap</a></li>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#whitepaper">White Paper</a></li>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#privacy">Privacy</a></li>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#cookies">Cookies</a></li>
              <li><a className=' mb-0 ff-manrope fs-16 lh-24 fw-medium webkit color_lightwh' href="#disclaimer">Disclaimer</a></li>
            </ul>

          </div>
          <div className=' d-flex justify-content-center align-items-center line_pt'>
            <div className=' line_footer mb-lg-5 mb-sm-4 mb-3 w-100'></div>
          </div>
          <div className=' d-flex justify-content-center'>
            <div className=' d-flex justify-content-between mw_1140 w-100 gap-2   flex-wrap'>
              <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_lightgray '>
                contact@clairmeme.com
              </p>
              <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_lightgray text-end  '>
                © 2024 Baby Sinclair All rights reserved
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default FooterSection
