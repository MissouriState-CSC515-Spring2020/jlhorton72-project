import React from 'react';
import'./Components/Categories/Categories';
import Dog4 from './ComponentImages/dog4.jpg';

const PictureDescription = () => {
	return (
		<div>
			<title>Image Description</title>
			<div className='row'>
				<div className='col s4'></div>
				<div className='col s4'>
				<h4>Picture Description</h4>
					<img src={Dog4} className='imgStyle'></img>
				</div>
				<div className='col s4'></div>
			</div>
			<div className='center-align'> The American Cocker Spaniel!</div>
		</div>
	)
}
export default PictureDescription;