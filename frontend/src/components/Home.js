import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles/Home.css";
import home_img from '../images/home_img.jpg';
import home_image from '../images/home_image.png';
import home_img5 from '../images/home_img5.png';
import home_img6 from '../images/home_img6.png';
import home_img7 from '../images/home_img7.jpg';
import reduce from '../images/reduce.jpg';
import no_waste from '../images/no_waste.jpg';
import donation from '../images/donation.png';


function Home() {
        return(
        <div className='home'>
                {/* <Container>
                <img src={reduce} className='reduce'></img>
                        <p className='header'>READY TO JOIN THE BATTLE AGAINST FOOD WASTE?</p>
                </Container> */}
                
                <div className='reduce'>
          <img src={reduce} className='ig' alt="donate" width="300"  />
          
          <div >
           <h1 className='bannerReduce'>READY TO JOIN THE BATTLE AGAINST FOOD WASTE?</h1>
          </div>
          </div>
        <div className='ban' >
                <Row>
                <Col sm={6}>
                        <p className='text secondBan'>World Hunger is on the rise; yet, an estimated 1/3 of all food 
                        produced globally is lost or goes to waste. We all have a part to play in reducing 
                        food loss and waste, not only for the sake of the food but for the resources that go into it.
                        </p>
                        </Col>
                        <Col sm={6}>
                                <img className='image' src={home_image} alt="" />
                        </Col>

                        
                </Row>
        </div>

        <Container>
                <Row>
                <Col sm={6}>
                                <img className='image2' src={home_img5} alt="" />
                        </Col>
                        <Col sm={6}>
                                <p className='text2 thirdBan'> As per the Food Waste Index Report (2021) of United Nations Environment Programme, 
                                a staggering 50 kg of food is thrown away per person every year in Indian homes. 
                                This excess food waste usually ends up in landfills, creating potent greenhouse gases 
                                which have dire environmental implications. Meanwhile, we continue to be greenwashed into 
                                amassing more “organic” and “sustainable” products than we really need.</p>
                        </Col>

                        
                </Row>
        </Container>


        <p className='heh'>Here's how you can make a difference!</p>

        <Container className='text3'>
                        <Col>
                                <h5 >Many people are prone to dismissing food waste as 
                                someone else's issue ("I don't waste any food") or focusing primarily on the 
                                more overtly distressing examples of waste (unharvested fields of produce 
                                ploughed back into the earth, supermarket skip waste). The reality is that 
                                more than half of all food waste in the 'civilised' globe occurs in our households.
                                So, the bad news is we are half the problem. But the good news is… we can be half the solution!</h5>
                        </Col>
        </Container>

        <Container className='text'>
                        <Col >
                                <h5 className='text3'>Easily keep track of, organise, and manage your household's food!
                                                You can simply check what food you have left in your freezer, fridge, and pantry, 
                                                identify what food you need to use first, plan your meals, create a shopping list, 
                                                avoid wasteful purchases, reduce food waste, and save a lot of money using lists for 
                                                your freezer, fridge, and pantry.</h5>
                        </Col>
        </Container>

        <p className='heh2'>Key Features!</p>
        <Container className='ft'>
                <Row>
                        <Col sm={4}>
                                <img className='image3' src={home_img6} alt="" />
                                <h3 className='feat'>Keep track of your food and their expiry dates.</h3>
                        </Col>
                        <Col sm={4}>
                                <img className='image3' src={no_waste} alt="" />
                                <h3 className='feat'>Make use of byproducts of food and reduce waste.</h3>
                        </Col>
                        <Col sm={4}>
                                <img className='image3' src={donation} alt="" />
                                <h3 className='feat'>Donate excessive food so as to not waste it eventually.</h3>
                        </Col>
                </Row>
        </Container>


        </div>
        )
}

export default Home;