import React from 'react';
import styled from 'styled-components';
import Trusted from './Components/Trusted';

function About() {



    return (
        <>
            <Wrapper className='container'>
                {/* =========== poster image =========== */}
                <div className='about-poster-image'>
                    <img
                        src='https://th.bing.com/th/id/R.9057f2433157f6fc90aa92e18b18ffe7?rik=vK3DWw1c6Qp%2ftw&pid=ImgRaw&r=0'
                        alt='poster image not found'
                        className='poster-image'
                    />
                </div>

                {/* =========== cover image & about info =========== */}
                <div className='grid grid-two-column section-2'>
                    <div className='abou-info-image'>
                        <img
                            src='https://i.pinimg.com/originals/79/c3/0b/79c30bbf74252f3589765a937d6c757a.jpg'
                            alt='info-image not found'
                            className='info--image'
                        />
                    </div>
                    <div className='about-info'>
                        <h3 >
                            Welcome to
                            <br />
                            <span>W&U Online Store</span>
                        </h3>
                        <p className='About-info'>
                        Welcome to  [<span>W&U Onine Store</span>], the premier online destination for mobiles and laptops. Our goal is to provide our customers with the best selection of top-quality mobiles and laptops at competitive prices.
                            <br /><br />
                            At [W&U Online Store], we believe in making the online shopping experience easy, fun and hassle-free. Our website is designed with simplicity in mind, making it easy for you to find what you're looking for, compare products, and make informed purchasing decisions.
                            <br /><br />
                            We have a dedicated team of professionals who are passionate about technology and customer service. Our team is committed to providing you with the best possible shopping experience, from product selection to delivery.
                            <br /><br />
                            We take pride in offering a wide variety of products from the leading brands in the industry. Our selection includes the latest models and cutting-edge technologies to ensure that you have access to the best mobiles and laptops on the market.
                            <br /><br />
                            At [W&U Onine Store], we believe in building strong relationships with our customers. We value your feedback and encourage you to contact us with any questions or concerns you may have.
                            <br /><br />
                            Thank you for choosing [W&U Online Store] for all of your mobile and laptop needs. We look forward to serving you!
                        </p>
                    </div>
                </div>

                <Trusted />
            </Wrapper>
        </>
    )
};

const Wrapper = styled.section`

            .poster-image {
                width: 100%;
                height: 50rem;
            }
            .section-2 {
                margin-top: 10rem;
            }
            .info--image {
                height: 30rem;
                width: 50rem;
                margin-top: 19rem;
            }
           
           

            h3 {
                font-size: 3rem;
                font-weight: 600;
                margin-bottom: 3rem;
                span {
                    font-weight: 800;
                    font-size: 3.5rem;
                }
            }
           
           }

           @media (max-width: ${({ theme }) => theme.media.mobile}) {
                    .info--image {
                        height: 25rem;
                        width: 40rem;
                        margin-top: 0rem;
                    }
           }
`;

export default About