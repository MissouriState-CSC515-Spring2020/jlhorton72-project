import React from 'react';
import DogCategory from './ComponentImages/dogCategory.jpg';
import CatCategory from './ComponentImages/catCategory.jpg';
import BirdCategory from './ComponentImages/birdCategory.jpg';
import {Link} from 'react-router-dom';

const Categories = (props) => {
    return (
        <div className="page">
            <title>Dog Category</title>
            <nav>
                <div className = 'row'>
                    <div className = 'col s4'>
                        <Link to ='/myOtherVideos'>
                            <div>Other Videos</div>
                        </Link>
                    </div>
                    <div className = 'col s4'>
                        <Link to ='/myVideos'>
                            <div>Videos</div>
                        </Link>
                    </div>
                    <div className = 'col s4'>
                        <Link to ='/videoDetails'>
                            <div>Video Details</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Categories