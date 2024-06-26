import React from 'react'
import { Container } from 'react-bootstrap'
import { Discord, Telegram, Twitter } from '../assets/icon'
import Socialbox_bg from '../assets/image/footerbox_bg.webp'
import cartoon2 from '../assets/image/cartoon2.webp'
const Social = () => {
  return (
    <>
      <div>
        <Container className='position-relative socail_py' id='cookies'>
          <div className=' d-flex justify-content-center'>
            <div className=' footer_box w-100 position-relative' data-aos="zoom-in-up">
              <div className=' position-relative z-2'>
                <h3 className=' mb-0 ff-manrope fs-48 fw-semibold lh-57 color_tertiary text-center'>
                  Our <span className=' color_emphasis'>Socials</span>
                </h3>
                <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_tertiary text-center pt-3'>
                  Join us on social media for exclusive giveaways and stay connected!
                </p>
                <p className=' mb-0 ff-manrope  fs-20 lh-30 fw-normal color_emphasis text-center exciting_py'>
                  “Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"
                </p>
              </div>
              <ul className=' mb-0 ps-0 d-flex justify-content-center gap-2 position-relative z-2'>
                <li className=' circle_icon d-flex justify-content-center align-items-center'>
                <a href="https://discord.com/" aria-label='discord' target=" blank"> <Discord /></a>
                </li>
                <li className=' circle_icon d-flex justify-content-center align-items-center'>
                <a href="https://x.com/?lang=en" aria-label='twitter' target="blank">
                <Twitter /></a>
                </li>
                <li className=' circle_icon d-flex justify-content-center align-items-center'>
                <a href="https://telegram.org/" aria-label='telegram' target="blank"><Telegram /></a>
                </li>
              </ul>
              <div className=' d-lg-block d-none'>
                <img className=' box_bg w-100' src={Socialbox_bg} alt="#" />
              </div>
            </div>
          </div>
            <img className='car_2' src={cartoon2} alt="#" />
          
          <div className='ellipse ellipse_8'></div>
          <div className='ellipse ellipse_9'></div>
        </Container>
      </div>
    </>
  )
}

export default Social
