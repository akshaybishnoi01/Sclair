import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Clockicon, Sclair1, Sclair2, Sclair3, Sclair4 } from '../assets/icon'
import amount_bgimg from '../assets/image/amounts_bg.webp'
import aboutlayer from '../assets/image/aboutlayer.webp'
import cartoon1 from '../assets/image/cartoon.webp'
import arrow1 from '../assets/image/arrow1.svg'
import arrow2 from '../assets/image/arrow2.svg'
const Aboutsclair = () => {
    const initialTime = { days: 0, hours: 12, minutes: 46, seconds: 19 };
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                let { days, hours, minutes, seconds } = prevTime;

                // Decrease time by 1 second
                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return { days, hours, minutes, seconds };
                }

                if (seconds === 0) {
                    seconds = 59;
                    if (minutes === 0) {
                        minutes = 59;
                        if (hours === 0) {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        } else {
                            hours--;
                        }
                    } else {
                        minutes--;
                    }
                } else {
                    seconds--;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000); // Run every second

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
    };
    return (
        <>
            <div className=' py-md-5 py-3 position-relative' id='about'>
                <div className=' aboutlayer_pos d-xxl-none d-block'>
                    <img className=' w-100 ' src={aboutlayer} alt="#" />
                </div>
                <Container className=' position-relative'>
                    <div className=' aboutlayer_pos d-xxl-block d-none'>
                        <img className=' w-100 ' src={aboutlayer} alt="#" />
                    </div>
                    <div className=' d-flex justify-content-center'>
                        <div className=' d-flex flex-lg-row flex-column align-items-center gap-md-5 gap-sm-4 gap-3 amount_box w-100 position-relative z-3'>
                            <div data-aos="fade-right">
                                <div className=' d-flex align-items-center raised_gap'>
                                    <div>
                                        <p className=' mb-0 fw-normal fs-16 lh-24 color_secondary'>
                                            1 $Clair
                                        </p>
                                        <p className=" mb-0 ff-manrope fw-bold fs-16 lh-24 color_emphasis">
                                            0.00387 $
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' mb-0 fw-normal fs-16 lh-24 color_secondary'>
                                            Raised Amount
                                        </p>
                                        <p className=" mb-0 ff-manrope fw-bold fs-16 lh-24 color_emphasis">
                                            332,123$
                                        </p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap_14 pt-3 pb-4'>
                                    <div className=' scla_box d-flex justify-content-center align-items-center cur_pointer'>
                                        <Sclair1 />
                                    </div>
                                    <div className=' scla_box d-flex justify-content-center align-items-center cur_pointer'>
                                        <Sclair2 />
                                    </div>
                                    <div className=' scla_box d-flex justify-content-center align-items-center cur_pointer'>
                                        <Sclair3 />
                                    </div>
                                    <div className=' scla_box d-flex justify-content-center align-items-center cur_pointer'>
                                        <Sclair4 />
                                    </div>
                                </div>
                                <button className=' mb-0 fw-bold fs-16 lh-24 ff-manrope buynow'>
                                    Buy Now
                                </button>
                            </div>
                            <div data-aos="fade-left">
                                <div className=' d-flex align-items-center  tokens_gap'>
                                    <div className=' ps-sm-3'>
                                        <p className=' mb-0 fw-normal fs-16 lh-24 color_secondary'>
                                            Tokens are Sold
                                        </p>
                                        <p className=" mb-0 ff-manrope fw-bold fs-16 lh-24 color_emphasis">
                                            98,212,738
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' mb-0 fw-normal fs-16 lh-24 color_secondary'>
                                            Tokens Remaining
                                        </p>
                                        <p className=" mb-0 ff-manrope fw-bold fs-16 lh-24 color_secondary">
                                            80,212,738
                                        </p>
                                    </div>
                                </div>
                                <div className=' position-relative'>
                                    <input type="range" name="" id="" />
                                    <div className=' aro_1 d-sm-block d-none'>
                                        <img src={arrow1} alt="#" />
                                    </div>
                                    <div className=' aro_2  d-sm-block d-none'>
                                        <img src={arrow2} alt="#" />
                                    </div>
                                </div>
                                <p className=" mb-0 ff-manrope fs-14 lh-21 color_lightgray pt-1 pb-3">
                                    Purchase $Clair fast until the price increase.
                                </p>
                                <div className=' d-flex align-items-sm-center flex-sm-row flex-column gap-4'>
                                    <div className=' d-flex align-items-center gap-2'>
                                        <Clockicon />
                                        <p className=' mb-0 fs-16 lh-20 fw-normal ff-manrope color_tertiary price_w'>
                                            Price
                                            increase in
                                        </p>
                                    </div>
                                    <div className=' d-flex justify-content-sm-center align-items-center gap-2 ps-sm-2'>

                                        <div className=' d-flex flex-column align-items-center'>
                                            <p className=" mb-0 ff-manrope fs-14 lh-21 color_lightgray text-center">
                                                Days
                                            </p>
                                            <p className=" mb-0 ff-manrope fs-24 lh-36 fw-normal color_tertiary d-flex align-items-center justify-content-center num_box">
                                                {`${formatTime(time.days)}`}
                                            </p>
                                        </div>
                                        <div className=' d-flex flex-column align-items-center gap-2 pt-4'>
                                            <div className=' dot'>
                                            </div>
                                            <div className=' dot'>
                                            </div>
                                        </div>
                                        <div className=' d-flex flex-column align-items-center'>
                                            <p className=" mb-0 ff-manrope fs-14 lh-21 color_lightgray text-center">
                                                Hours
                                            </p>
                                            <p className=" mb-0 ff-manrope fs-24 lh-36 fw-normal color_tertiary d-flex align-items-center justify-content-center num_box">
                                                {`${formatTime(time.hours)}`}
                                            </p>
                                        </div>
                                        <div className=' d-flex flex-column align-items-center gap-2 pt-4'>
                                            <div className=' dot'>
                                            </div>
                                            <div className=' dot'>
                                            </div>
                                        </div>
                                        <div className=' d-flex flex-column align-items-center'>
                                            <p className=" mb-0 ff-manrope fs-14 lh-21 color_lightgray text-center">
                                                Mins
                                            </p>
                                            <p className=" mb-0 ff-manrope fs-24 lh-36 fw-normal color_tertiary d-flex align-items-center justify-content-center num_box">
                                                {`${formatTime(time.minutes)}`}
                                            </p>
                                        </div>
                                        <div className=' d-flex flex-column align-items-center gap-2 pt-4'>
                                            <div className=' dot'>
                                            </div>
                                            <div className=' dot'>
                                            </div>
                                        </div>
                                        <div className=' d-flex flex-column align-items-center'>
                                            <p className=" mb-0 ff-manrope fs-14 lh-21 color_lightgray text-center">
                                                Secs
                                            </p>
                                            <p className=" mb-0 ff-manrope fs-24 lh-36 fw-normal color_tertiary d-flex align-items-center justify-content-center num_box">
                                                {`${formatTime(time.seconds)}`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' pos_amount z-n1'>
                                <img className=' w-100 box_bgimg_w' src={amount_bgimg} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex justify-content-center align-items-center flex-column about_pt' data-aos="zoom-in-up">
                        <h3 className=' mb-0 ff-manrope fs-48 lh-57 fw-semibold color_tertiary text-center '>
                            About <span className=' color_emphasis'>$CLAIR</span>
                        </h3>
                        <p className=' mb-0 ff-manrope fs-16 lh-24 fw-normal color_lightgray mw_776 text-center pt-3'>
                            As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.
                        </p>
                        <p className=' mb-0 ff-manrope fs-16 lh-24 fw-normal color_lightgray mw_764 text-center py-2'>
                            In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.
                        </p>
                        <p className=' mb-0 ff-manrope fs-16 fw-normal lh-24 color_lightgray mw_856 text-center'>
                            In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.
                        </p>
                        <button className=' mb-0 ff-manrope fs-16 lh-24 fw-bold learn_btn'>
                            Learn More
                        </button>
                    </div>
                    <div className=' cartoon_pos'>
                        <img className=' w-100 cart_w' src={cartoon1} alt="#" />
                    </div>
                </Container>

            </div>
        </>
    )
}

export default Aboutsclair
