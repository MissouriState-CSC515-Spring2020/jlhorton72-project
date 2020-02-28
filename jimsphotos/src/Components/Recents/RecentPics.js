import React from 'react';

import Dog01 from './ComponentImages/dog01.jpg';
import Dog2 from './ComponentImages/dog2.jpg';
import Dog3 from './ComponentImages/dog3.jpg';
import Dog4 from './ComponentImages/dog4.jpg';
import Cat1 from './ComponentImages/cat1.jpg';
import Cat2 from './ComponentImages/cat2.jpg';
import Cat3 from './ComponentImages/cat3.jpg';
import Cat4 from './ComponentImages/cat4.jpg';
import Bird1 from './ComponentImages/bird1.jpg';
import Bird2 from './ComponentImages/bird2.jpg';
import Bird3 from './ComponentImages/bird3.jpg';
import Bird4 from './ComponentImages/bird4.jpg';

import { Link } from 'react-router-dom';


const RecentPics = (props) => {
	return (
		<div className="page">
			<h2 class='center-align'>Beautiful Pictures of Animals!
		<i class="material-icons" id='iconSize'></i>
			</h2>
			<h4 className='categoryHead'>
					Recent Pics
				</h4>
			<div className="row">

				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Dog01} className='imgStyle' alt='American Pitbull'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Dog2} className='imgStyle' alt='Newfoundland'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Dog3} className='imgStyle' alt='Siberian Husky'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Dog4} className='imgStyle' alt='American Cocker Spaniel'></img>
				</Link>
				</div>
			</div>
			<div className="row">
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Cat1} className='imgStyle' alt='Gray Striped Cat'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Cat2} className='imgStyle' alt='Orange Cat'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Cat3} className='imgStyle' alt='White Fluffy'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Cat4} className='imgStyle' alt='Siamese in Garden'></img>
				</Link>
				</div>
			</div>
			<div className="row">
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Bird1} className='imgStyle' alt='Two Colorful Birds'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Bird2} className='imgStyle' alt='Toucan in Tree'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Bird3} className='imgStyle' alt='Eagle in Flight'></img>
				</Link>
				</div>
				<div className="col s2">
				<Link to='/pictureDescription'>
					<img src={Bird4} className='imgStyle' alt='Owl in Flight'></img>
				</Link>
				</div>
			</div>
		</div >
	)
};

export default RecentPics;