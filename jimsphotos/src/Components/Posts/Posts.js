import React, { Component } from 'react'
import axios from 'axios'


class Post extends Component {
	constructor(props){
		super(props)

		this.state = {
			results: [],
			url: []
		}
	}

componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/search?part=id&q=puppies&type=video&maxResults=16&key=AIzaSyAHm08yXSKTUw_iVJtKNPZNE5vBUBX0Vg4').then(response =>{
		this.setState({results: response.data.items, url: "https://www.youtube.com/embed/"})	
	})
	.catch(error =>{
		console.log(error)
	})
}

render(){
	const {results} = this.state
	const {url} = this.state
	return(
	<div>
	<div className ='labelStyle'> Lastest Videos: </div>
	<div className = 'row'> 
	{
		results.map(result => <div key = {result.id}> <div className ='col s3'> <iframe src = {url + result.id.videoId}></iframe></div></div>)
	} 
	</div>
	</div>
	)
}
}
export default Post