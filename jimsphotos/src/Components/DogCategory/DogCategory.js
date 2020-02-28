import React from 'react';


import Dog01 from './ComponentImages/dog01.jpg';
import Dog2 from './ComponentImages/dog2.jpg';
import Dog3 from './ComponentImages/dog3.jpg';
import Dog4 from './ComponentImages/dog4.jpg';

import {Link} from 'react-router-dom';

const DogCategory = (props) => {
    return (
        <div className="page">
            <title>Dog Pics</title>
            <div className="row">
                <h3 className="">
                    Dog Pics
                </h3>
                <div className="col s2">
                    <a href='/layouts/picInfo.html'><img src={Dog01} className='imgStyle' alt=''></img></a>
                </div>
                <div className='col s2'>
                    <Link to='/pictureDescription'>
                        <img src={Dog01} className='imgStyle' alt='American PitBull'></img>
                    </Link>
                </div>
                <div className='col s2'>
                    <Link to='/pictureDescription'>
                        <img src={Dog2} className='imgStyle' alt='Newfoundland'></img>
                    </Link>
                </div>
                <div className='col s2'>
                    <Link to='/pictureDescription'>
                        <img src={Dog3} className='imgStyle' alt='Siberian Husky'></img>
                    </Link>
                </div>
                <div className='col s2'>
                    <Link to='/pictureDescription'>
                        <img src={Dog4} className='imgStyle' alt='American Cocker Spaniel'></img>
                    </Link>
                </div>
            </div>
        </div>
    ) // end of return
}; // end of const

export default DogCategory;