import React from 'react'
import Illustration from '../images/illustration-1.svg'
// import '../App.css'

const First = () => {
    return (
        <div>
            <article className='m-5 '>
                <section className='art1'>
                    <div>
                        <h1 className='header mt-5'>
                            All your files in one secure location, accessible anywhere
                        </h1>
                        <p className='mt-4 text'>
                            Fylo stores your most important files in one secure location. Access
                            them wherever you need, share and collaborate with friends, family, and co-workers.
                        </p>
                        <div className='input2'>
                           <div>
                           <input type="text" placeholder="Enter your email" className="input1 " />
                           </div>
                            <div>
                            <a href="https://..."className='start bg-primary text-white text-decoration-none m-1'>Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className='files1'>
                        <img src={Illustration} alt="files" className='ill-1' />
                    </div>
                </section>
            </article>
        </div>
    )
}

export default First
