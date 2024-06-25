import React from 'react'
import { Container } from 'react-bootstrap'
import phase1 from '../assets/image/phase_1.svg'
import phase2 from '../assets/image/phase_2.svg'
import phase3 from '../assets/image/phase_3.svg'
import trading_chart from '../assets/image/trading_chart.webp'
const Roadmap = () => {
  return (
    <>
      <div className=' position-relative roadmap_bg overflow-hidden' id='roadmap'>
        <Container className=' roadmap_py position-relative'>
          <h3 className=' mb-0 ff-manrope fw-semibold fs-48 lh-57 color_tertiary text-center' data-aos="zoom-in">
            Roadmap
          </h3>
          <div className=' d-flex flex-wrap gap_90 justify-content-center position-relative z-1'>
            <div className=' w-100 roadmap_box box1_mt position-relative' data-aos="flip-left">
              <h4 className=' mb-0 ff-manrope fs-32 lh-48 fw-medium color_white pb-3'>
                Phase 1
              </h4>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Team Recruitment
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Social Media
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Audit Smart Contract
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Whitepaper
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Presale Launch
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Community Growth
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  AI Avatars Release
                </p>
              </div>
              <div className=' circle_arrow1 d-lg-block d-none'>
                <img src={phase1} alt="#" />
              </div>
            </div>
            <div className=' w-100 roadmap_box box2_mt position-relative' data-aos="flip-down">
              <h4 className=' mb-0 ff-manrope fs-32 lh-48 fw-medium color_white pb-3'>
                Phase 2
              </h4>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Official Launch
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Burns 5%
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Major DEX & CEX Listings
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Coinmarketcap
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  CoinGecko
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Influencers Marketing
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  More AI Avatars Release
                </p>
              </div>
              <div className=' circle_arrow2 d-lg-block d-none'>
                <img src={phase2} alt="#" />
              </div>
            </div>
            <div className=' w-100 roadmap_box box3_mt position-relative' data-aos="flip-right">
              <h4 className=' mb-0 ff-manrope fs-32 lh-48 fw-medium color_white pb-3'>
                Phase 3
              </h4>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Burns (5% quarterly)
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Rewards Program
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Multiple Partnerships
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2 py-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  Create your own AI Avatar Voiceover.
                </p>
              </div>
              <div className=' d-flex align-items-center gap-2'>
                <p className=' dots_2 mb-0'></p>
                <p className=' mb-0 ff-manrope fs-16 lh-24 color_secondary'>
                  AI Metaverse Avatar Play-to-Earn
                </p>
              </div>
              <div className=' circle_arrow3  d-lg-block d-none'>
                <img src={phase3} alt="#" />
              </div>
            </div>
          </div>
          <div className=' d-xxl-block d-none trad_chart' data-aos="fade-up-right">
            <img className=' w-100' src={trading_chart} alt="#" />
          </div>
        </Container>
        <div className=' trad_chart d-xxl-none d-block'>
          <img  src={trading_chart} alt="#" />
        </div>

      </div>
    </>
  )
}

export default Roadmap
