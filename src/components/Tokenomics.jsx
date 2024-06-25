import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Dotarrow } from '../assets/icon'
import chat_prcent from '../assets/image/chart_prcent.webp'
import profile1 from '../assets/image/profile1.png'
import profile2 from '../assets/image/profile2.png'
const Tokenomics = () => {
    return (
        <>
            <div className=' chart_bg' id='tokenomics'>
                <Container className=' tokenomice_py'>
                    <Row className=' justify-content-between '>
                        <Col lg={5} className=' d-flex justify-content-center ' data-aos="flip-left">
                            <div >
                                <h2 className=' mb-0 ff-manrope fs-48 lh-57 fw-semibold color_tertiary'>
                                    Tokenomics
                                </h2>
                                <div className=' d-flex  gap-3 align-items-center pt-3 pb-4'>
                                    <p className=' mb-0 ff-manrope fs-24 lh-36 fw-normal color_secondary'>
                                        Baby Sinclair
                                    </p>
                                    <button className=' mb-0 ff-manrope fs-24 lh-36 fw-normal sclair_btn'>
                                        $Clair
                                    </button>
                                </div>
                                <p className=" mb-0 ff-manrope fs-16 fw-medium lh-24 color_secondary total_pt">
                                    Total Tokens
                                </p>
                                <p className=' mb-0 ff-manrope fs-40 lh-48 fw-semibold color_emphasis pt-1 numb_pb'>
                                    100,000,000,000
                                </p>
                                <div className=' d-flex align-items-center gap-2'>
                                    <Dotarrow />
                                    <p className=' mb-0 fs-24 lh-36 ff-manrope fw-medium color_secondary'>
                                        1%
                                    </p>
                                    <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_secondary'>
                                        Presale
                                    </p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 py_12'>
                                    <Dotarrow />
                                    <p className=' mb-0 fs-24 lh-36 ff-manrope fw-medium color_secondary'>
                                        3%
                                    </p>
                                    <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_secondary'>
                                        Marketing
                                    </p>
                                </div>
                                <div className=' d-flex align-items-center gap-2'>
                                    <Dotarrow />
                                    <p className=' mb-0 fs-24 lh-36 ff-manrope fw-medium color_secondary'>
                                        5%
                                    </p>
                                    <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_secondary'>
                                        Team - locked for 24 months
                                    </p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 py_12'>
                                    <Dotarrow />
                                    <p className=' mb-0 fs-24 lh-36 ff-manrope fw-medium color_secondary'>
                                        10%
                                    </p>
                                    <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_secondary'>
                                        Investors - locked for 24 months
                                    </p>
                                </div>
                                <div className=' d-flex align-items-center gap-2'>
                                    <Dotarrow />
                                    <p className=' mb-0 fs-24 lh-36 ff-manrope fw-medium color_secondary'>
                                        21%
                                    </p>
                                    <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_secondary'>
                                        Exchange listings & liquidity
                                    </p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 py_12'>
                                    <Dotarrow />
                                    <p className=' mb-0 fs-24 lh-36 ff-manrope fw-medium color_secondary'>
                                        60%
                                    </p>
                                    <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_secondary'>
                                        Rewards and burns
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className=' justify-content-center d-flex' data-aos="flip-right">
                            <img className=' w-100 chart_w' src={chat_prcent} alt="#" />
                        </Col>
                    </Row>
                    <div className=' d-flex justify-content-center community_pt' data-aos="flip-up">
                        <div className=' d-flex flex-lg-row flex-column align-items-center tokenbotton_box  w-100 gap_babysinc'>
                            <div className=' d-flex align-items-center gap-4 position-relative z-2'>
                                <img className=' pro_mw w-100' src={profile1} alt="#" />
                                <p className=' mb-0 ff-manrope fs-60 fw-normal text-white'>
                                    +
                                </p>
                                <img className=' pro_mw w-100' src={profile2} alt="#" />
                            </div>
                            <div className=' d-flex flex-column align-items-md-start align-items-center position-relative z-2'>
                                <p className=' mb-0 ff-manrope fs-20 lh-30 fw-semibold color_tertiary text-md-start text-center'>
                                    Baby Sinclair Stands Strong with the Shiba Inu Community
                                </p>
                                <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_secondary  text-md-start text-center'>
                                    10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Tokenomics
