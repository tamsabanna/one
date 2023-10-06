import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>SSR.</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphic"/>
        <div>
            <p>
                WE are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving abibilty is children.
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque nulla ullam ipsum natus voluptatum incidunt officiis dolor suscipit illo in aliquam ab, beatae maiores quod! Aperiam debitis cumque accusamus harum ea blanditiis, exercitationem quibusdam odio iste voluptatibus quaerat. Maiores sequi laudantium libero iste totam mollitia sint commodi? Amet, ipsa.</p>
        </div>
        

    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay: "0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay: "1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home;