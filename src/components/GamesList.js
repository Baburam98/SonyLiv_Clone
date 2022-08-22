import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class GamesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            error: "",
            dataLoaded: false,
            limit: 60,
            dataLength: null
        }
        this.clickHandler = this.clickHandler.bind(this)

    }
    clickHandler() {
        this.setState({
            limit: this.state.limit + this.state.dataLength / 4

        });
    }
    componentDidMount() {
        axios.get("https://api.tvmaze.com/shows")
            .then(response => {
                this.setState({ dataLength: response.data.length })
                this.setState({ posts: response.data })
                this.setState({ dataLoaded: true })
            })
            .catch(error => {
                this.setState({ error: "Endpoint is not correct" })

            })
    }

    render() {
        const { posts, dataLoaded, error, limit } = this.state;
        return (
            <>
                <div>
                <h3 style={{color:"white",marginLeft:"10px"}}>Top Games</h3>
                    {dataLoaded ? posts.map((item, index) =>
                        (index < limit) &&
                        <Link to={{pathname: "/details",state:{items:item}}}>
                        <img key={item.id} className="landscape" src={item.image.medium}/></Link>) : <div className="error">{error}</div>
                        }
                </div>
                <div className="container">
                    {limit >= posts.length ?
                        null : 
                        <div className="m-3 d-flex flex-row justify-content-center" >
                            <button id="showBtn" type="button" onClick={this.clickHandler}>Show More</button>
                        </div>
                    }
                </div>
            </>
        )
    }
}
export default GamesList