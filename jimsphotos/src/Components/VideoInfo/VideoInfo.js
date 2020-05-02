import React, { Component } from 'react'
import axios from 'axios'

class PostThree extends Component {
	constructor(props){
		super(props)

		this.state = {
			results: [],
			url: [],
			stats: []
		}
	}
// need the urls...
componentDidMount(){
	axios.get('https://www.googleapis.com/youtube/v3/search?part=id&q=puppies&maxResults=1&key=AIzaSyAHm08yXSKTUw_iVJtKNPZNE5vBUBX0Vg4')
	.then(response =>{
		this.setState({results: response.data.items, url: "https://www.youtube.com/embed/", info: response})
		console.log(response)
	axios.get('https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&key=AIzaSyAHm08yXSKTUw_iVJtKNPZNE5vBUBX0Vg4' + response.data.items[0].id.videoId)
	.then(my_data => {
		let my_new_data = my_data.data.items[0].statistics.viewCount
		let my_likes = my_data.data.items[0].statistics.likeCount
		let my_dislikes = my_data.data.items[0].statistics.dislikeCount
		let my_comments = my_data.data.items[0].statistics.commentCount
		// let my_likes = my_data.data.items[0].statistics
		this.setState({stats: my_new_data, likes: my_likes, dislikes: my_dislikes, comments:my_comments})
	})
		// this.setState({posts: response.data.items[0].snippet.playlistId,
		// url: "https://www.youtube.com/embed/"})
		// this.setState({posts:response.data})
	})
	.catch(error =>{
		console.log(error)
	})

}

render(){
	const {results} = this.state
	const {url} = this.state
	const {info} = this.state
	const {stats} = this.state
	const {likes} = this.state
	const {dislikes} = this.state
	const {comments} = this.state
	return(
	<div>
	<div className ='labelStyle'> Video Analytics: </div>
	<div>{"Views: " + stats}</div>
	<div>{"Likes: " + likes} </div>
	<div>{"Dislikes: " + dislikes} </div>
	<div>{"Comments: " + comments} </div>

	<div className = 'row'> 
	<div className = 'center-align'>
	{
		results.map(result => <div key = {result.id + '2'}><div>{info.headers.date}</div> <div className ='col s3'> <iframe src = {url + result.id.videoId}></iframe></div>
		</div>)
		// <iframe>{results[0]}</iframe>
	} 
	</div> 
	</div>
	</div>
	)
}
}
export default PostThree