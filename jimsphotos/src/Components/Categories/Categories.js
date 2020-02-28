import React from 'react';
import DogCategory from './ComponentImages/dogCategory.jpg';
import CatCategory from './ComponentImages/catCategory.jpg';
import BirdCategory from './ComponentImages/birdCategory.jpg';
import {Link} from 'react-router-dom';

const Categories = (props) => {
    return (
        <div>
            <title>Dog Category</title>
            <nav>
                <div className = 'row'>
                    <div className = 'col s4'>
                        <Link to ='/dogCategory'>
                            <div>Dogs</div>
                        </Link>
                    </div>
                    <div className = 'col s4'>
                        <Link to ='/dogCategory'>
                            <div>Cats</div>
                        </Link>
                    </div>
                    <div className = 'col s4'>
                        <Link to ='/dogCategory'>
                            <div>Birds</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Categories