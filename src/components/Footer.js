import React from 'react'
import Logo from '../images/logo.svg'

const Footer = () => {
  return (
    <div>
      <div className=''>
        <article className=' p-5 dark-blue '>
          <section className='logo-area'>
            <div>
              <img src={Logo} alt="logo" className='mb-4'/>
            </div>
            <div className='telephone '>
              <i className='fa fa-phone'></i>
              <a href = "tel: + 1-543-123-4567" className='mx-2'> Phone: +1-543-123-4567</a>
            </div>
            <div className='d-flex align-items-center'>
              <i className='fa fa-envelope'></i>
              <a href="mailto:example@fylo.com" className='mx-3'> example@fylo.com</a>
            </div>
          </section>
          <section>
            <ul>
              <li>
                <a href="https://...">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://...">
                  Jobs
                </a>
              </li>
              <li>
                <a href="https://...">
                  Press
                </a>
              </li>
              <li>
                <a href="https://...">
                  Blog
                </a>
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <a href="https://...">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://...">
                  Terms
                </a>
              </li>
              <li>
                <a href="https://...">
                  Privacy
                </a>
              </li>
            </ul>
          </section>
          <section className='d-flex'>
            <i class='fa fa-facebook'></i>
            <i class='fa fa-twitter'></i>
            <i class='fa fa-instagram'></i>
          </section>
        </article>
      </div>
    </div>
  )
}

export default Footer
