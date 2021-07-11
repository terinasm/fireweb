import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Title here</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='first image caption'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='second caption'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-3.jpg'
              text='another caption'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='another caption'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='./images/img-8.jpg'
              text='another caption'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
