import React, {Component} from 'react'
import axios from 'axios'

class PostTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: [],
            url: []
        }
    } // end of constructor

    componentDidMount(){
        axios.get('https://www.googleapis.com/youtube/v3/search?part=id&q=puppies&type=video&maxResults=16&key=AIzaSyAHm08yXSKTUw_iVJtKNPZNE5vBUBX0Vg4').then(
            response =>{
                this.setState({results: response.data.items, url: "https://www.youtube.com/embed/"})
                console.log(response.data.items)
            } // end of response
        ) // end of .then
            .catch(error =>{
                console.log(error)
            })
    } // end of compDidMount

    render() {
        const {results} = this.state
        const {url} = this.state
        return (
            <div>
                <div className = 'labelStyle'> Newest Videos: </div>
                <div className = 'row'>
                    {
                        results.map(result => <div key = {result.id + '1'}><div className = 'col s3'><iframe src = {url + result.id.videoId}></iframe></div></div>)
                    }
                </div>
            </div>
        ) // end of return
    } // end of render

} // end of class

export default PostTwo