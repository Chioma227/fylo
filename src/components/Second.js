import React from 'react'
import Illustration from '../images/illustration-2.svg'
import Quote from '../images/icon-quotes.svg'
import Icon from '../images/icon-arrow.svg'
import Avatar from "../images/avatar-testimonial.jpg"

const Second = () => {
    return (
        <div className='sec2-body'>
            <article className='m-5 art2'>
                <section>
                    <div>
                        <h2 className='header2'>
                            Stay productive, wherever you are
                        </h2>
                        <p className='info1'>
                            Never let location be an issue when accessing your files.
                            Fylo has you covered for all of your file storage needs.
                        </p>
                        <p className='info2'>
                            Securely share files and folders with friends, family and
                            colleagues for live collaboration. No email attachments required!
                        </p>
                        <div className='align-items-center m-1 fylo'>
                            <a href="https://...">See How Flyo Works 
                            <img src={Icon} alt="arrow" className='w-20'/>
                            </a>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={Quote} alt="quote" />
                        </div>
                        <p className='para1'>
                            Fylo has improved our team productivity by an order of magnitude.
                            Since making the switch our team has become a well-oiled collaboration machine.
                        </p>
                        <div className='d-flex gap-2'>
                            <div className='avatar'>
                                <img src={Avatar} alt = "avatar"/>
                            </div>
                            <div className='info'>
                                <h4>Kyle Burton</h4>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='file2'>
                    <img src={Illustration} alt= "files" className='ill-2'/>
                </section>
            </article>
        </div>
    )
}

export default Second
