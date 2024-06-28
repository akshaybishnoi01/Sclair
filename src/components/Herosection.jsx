import React, { useState } from 'react'
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import logo from '../assets/image/logo.svg'
import { Buyicon, Mouse, Translate } from '../assets/icon';
import hero_img from '../assets/image/headerimg.webp'
const Herosection = () => {
  const [nav, setnav] = useState(true)
  function handleopen() {
    setnav(!nav)
  }
  if (nav === false) {
    document.body.classList.add("overflow_hidden")
  } else {
    document.body.classList.remove("overflow_hidden")
  }
  return (
    <>
      <header className=' header_bgimg position-relative'>
        <nav className=" nav_bg">
          <Container className=' nav_w w-100 '>
            <div className="  d-flex justify-content-between align-items-center nav_py ">
              <div className=" d-flex align-items-center gap-2">
                <img src={logo} alt="logo" />
                <p className=' mb-0 ff-manrope fs-32 lh-48 fw-semibold color_emphasis'>
                  $CLAIR
                </p>
              </div>

              <div className=' d-flex'>
                <ul className={`${nav ? "navbarHide" : "navbarShow"} d-flex m-0 p-0 align-items-center gap_32 mobile_view `}>
                  <li onClick={handleopen}><a className=" mb-0 webkit ff-manrope fs-16 fw-medium lh-24 color_secondary" href="#about">About</a></li>
                  <li onClick={handleopen}><a className=" mb-0 webkit  ff-manrope fs-16 fw-medium lh-24 color_secondary" href="#tokenomics">Tokenomics</a></li>
                  <li onClick={handleopen}><a className=" mb-0 webkit  ff-manrope fs-16 fw-medium lh-24 color_secondary" href="#audit">Audit</a></li>
                  <li onClick={handleopen}><a className=" mb-0 webkit  ff-manrope fs-16 fw-medium lh-24 color_secondary" href="#roadmap">Roadmap</a></li>
                  <li onClick={handleopen}><a className=" mb-0 webkit  ff-manrope fs-16 fw-medium lh-24 color_secondary" href="#whitepaper">White Paper</a></li>

                </ul>
                <Dropdown className=' ms-lg-5'>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className=' d-flex justify-content-center align-items-center'>
                    <Translate />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className=' bg_lang'>
                    <Dropdown.Item className=' lang' href="#English">English</Dropdown.Item>
                    <Dropdown.Item className=' lang' href="#Spanish">Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div onClick={() => setnav(!nav)} className="menuicon d-flex flex-column gap-2 d-lg-none ms-md-3 ms-0 cur-pointer">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>

            </div>
            
          </Container>
        </nav>
        <Container className=' position-relative'>
          <div className=' d-flex flex-column justify-content-center align-items-center'>
            <h1 className=' mb-0 ff-manrope fs-60 fw-bold lh-72 color_tertiary text-center presale_pt'>
              Presale is <span className=' color_emphasis'>Live</span>
            </h1>
            <p className=' mb-0 ff-manrope fs-16 lh-24 fw-normal color_lightwh mw_702 text-center pra1_py'>
              Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!
            </p>
            <button className=' mb-0 ff-manrope fs-16 lh-24 fw-bold buy_btn'>
              Buy $Clair <Buyicon />
            </button>
            <div>
              <img className=' w-100 headerimg_w' src={hero_img} alt="hero_img" />
            </div>
          </div>
          <div className='ellipse ellipse_1'></div>
        </Container>
        <div className='mouse_box justify-content-center align-items-center d-sm-flex d-none pos_mou'>
          <Mouse />
        </div>
      </header>
    </>
  )
}

export default Herosection