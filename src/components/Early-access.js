import React from 'react'

const EarlyAccess = () => {
    return (
        <div className=' early '>
            <div className=' light-blue p-5 text-white access'>
                <section>
                    <h2 className='heading'>
                        Get early access today
                    </h2>
                    <p className='sign-up'>
                        It only takes a minute to sign up and our free starter tier is extremely generous.
                        If you have any questions, our support team would be happy to help you.
                    </p>
                </section>
                <section className='input'>
                        <div>
                        <input type="text" placeholder="example@example.com" className="input1 " />
                        </div>
                        <div><a href="https://..." className='start bg-primary text-white text-decoration-none m-1'>Get Started For Free</a></div>
                </section>
            </div>
        </div>
    )
}

export default EarlyAccess
