import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import lockimg from '../assets/image/lockimg.webp'
import slid_1 from '../assets/image/slid_1.svg'
import slid_2 from '../assets/image/slid_2.svg'
import slid_3 from '../assets/image/slid_3.svg'
import slid_4 from '../assets/image/slid_4.svg'
import slid_5 from '../assets/image/slid_5.svg'
import slid_6 from '../assets/image/slid_6.svg'
import Slider from "react-slick";
import lockk from '../assets/image/lockk.webp'
const Audited = () => {

  var settings = {
    dots: false,
    autoplay: true,
    variableWidth: true,
    arrows: false,
    infinite: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <>
      <div className=' audited_bg ' id='audit'>
        <Container className=' audited_py'>
          <Row data-aos="fade-left">
            <Col lg={6} className=' d-flex justify-content-center position-relative'>
              <img className=' w-100 lock_w' src={lockimg} alt="#" />
              <div className=' d-lg-block d-none'>
                <img className=' w-100 lockk_pos' src={lockk} alt="#" />
              </div>
            </Col>
            <Col lg={6} className='  d-flex justify-content-lg-start justify-content-center pt-lg-0 pt-sm-5 pt-4'>
              <div>
                <p className=" mb-0 ff-manrope fs-20 lh-30 fw-normal color_secondary">
                  Rest easy knowing that $CLAIR is
                </p>
                <p className=" mb-0 ff-manrope fw-semibold fs-32 lh-48 color_emphasis fully_py">
                  Fully Audited and 100% Secure.
                </p>
                <p className=" mb-0 ff-manrope fs-20 lh-30 fw-normal color_secondary">
                  Zero Room for Rug Pulls: Invest with Confidence.
                </p>
                <button className=' mb-0 ff-manrope fs-16 fw-bold lh-24 audit_btn aud_mt'>
                  Audit
                </button>
              </div>
            </Col>
          </Row>
          <div className=' d-flex justify-content-center'>
            <div className=' line_1 w-100 d-flex'></div>
          </div>
          <Row data-aos="fade-right">
            <Col lg={6} className=' d-flex justify-content-lg-end justify-content-center pb-lg-0 pb-5'>
              <div className=' d-flex flex-column '>
                <h3 className=' mb-0 ff-manrope fw-semibold fs-32 lh-48 color_tertiary'>
                  Listing on <span className=' color_emphasis'>Major Exchanges</span>
                </h3>
                <p className=' mb-0 fs-20 lh-30 fw-normal color_secondary pra2_w pt-3'>
                  Baby Sinclair’s Team is in action to secure the <span className=' color_emphasis'>$CLAIR</span> listing on major exchanges. Exciting milestones ahead.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className=' d-flex justify-content-center'>
                <div className=' slider_box w-100'>
                  <Slider {...settings} >

                    <img className=' slider_pb' src={slid_1} alt="#" />

                    <img className=' slider_pb' src={slid_2} alt="#" />

                    <img className=' slider_pb' src={slid_3} alt="#" />

                    <img className=' slider_pb' src={slid_4} alt="#" />

                    <img className=' slider_pb' src={slid_5} alt="#" />

                    <img className=' slider_pb' src={slid_6} alt="#" />

                  </Slider>
                  <div className=' d-sm-flex d-none gap-3'>
                    <div className=' w-100 bord_line_1'></div>
                    <div className=' w-100 bord_line_2'></div>
                    <div className=' w-100 bord_line_3'></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Audited
