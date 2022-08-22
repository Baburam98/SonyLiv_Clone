import React, { Component } from 'react'
import NextEpisodes from './NextEpisodes'
import ShowMoreText from 'react-show-more-text'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
             items : this.props.location.state,
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        const post = this.state
        return (
            <div>
                <div className='details'>
                    <img id="img-details" src={post.items.items.image.original} alt=""/>
                    <h2 id="title">{post.items.items.name}</h2><br/><br/>
                    <ShowMoreText
                        lines={2}
                        more="Show more"
                        less="Show less"
                        className="summary content-css"
                        anchorClass="my-anchor-css-class"
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={700}
                        truncatedEndingComponent={"... "}
                    ><p dangerouslySetInnerHTML={{ __html: post.items.items.summary }} />
                    </ShowMoreText> <br></br>
                    <p id="para">Genres : {post.items.items.genres!==null?post.items.items.genres:'Not Found'}</p>
                    <p id="para">Language : {post.items.items.language!==null?post.items.items.language:'Not Found'}</p>
                    <p id="para">Rating : {post.items.items.rating.average!==null?post.items.items.rating.average:'Not Found'}</p>
                    <p id="para">Time : {post.items.items.schedule.time!==null?post.items.items.schedule.time:'Not Found'}</p> 
                    <p id="para">Scheduled Day : {post.items.items.schedule.days!==null?post.items.items.schedule.days:'Not Found'}</p>
                    <p id="para">Premiered : {post.items.items.premiered!==null?post.items.items.premiered:'Not Found'}</p>
                    <p id="para">Ended : {post.items.items.ended!==null?post.items.items.ended:'Not Found'} </p>
                </div>
                <NextEpisodes/> 
            </div>
        )
    }
}

export default Details

