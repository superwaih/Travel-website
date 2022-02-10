import React from 'react'
import CardItem from './CardItem';
import imageOne from '../images/img-9.jpg'
import imageTwo from '../images/img-2.jpg'
import imageThree from '../images/img-4.jpg'
import imageFour from '../images/img-3.jpg'
import imageFive from '../images/img-5.jpg'




import '../components/Card.css';

function Card() {
    return (
        <div className='cards'>
            <h1>Check out These Awesome Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src= {imageOne}
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                         <CardItem 
                        src={imageFour}
                        text='Travel Through the islands of Bali in a Private Cruise '
                        label='luxury'
                        path='/services' />
                        
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                        src={imageTwo}
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services' />
                         <CardItem 
                        src={imageFive}
                        text='Travel Through the islands of Bali in a Private Cruise '
                        label='luxury'
                        path='/services' />

                        <CardItem 
                        src={imageThree}
                        text='Travel Through the islands of Bali in a Private Cruise '
                        label='luxury'
                        path='/services' />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
