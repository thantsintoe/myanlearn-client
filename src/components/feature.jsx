import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    
    componentWillMount() { 
        this.props.fetchTwitterPosts();
    }

    renderTweets() {
        if (this.props.tweets !== undefined) {
            
            let tweetList = this.props.tweets.map((tweet) => {
                return (
                    <div className="media" key={tweet.id}>
                        <img className="mr-3" src={tweet.user.profile_image_url} alt="Profile"></img>
                        <div className="media-body">
                            <h5 className="mt-0">{tweet.user.screen_name}</h5>
                            <p>{tweet.text}</p>
                        </div>
                    </div>
                )
            })
            
            return tweetList;
        } else {
           return <p>Fetching Tweets...</p>
        }
    }
    
    render() {
        return (
            <div id="feature-container">
                <h3>Latest Tweets #education</h3>
                {this.renderTweets()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tweets : state.auth.tweets
    }
}

export default connect(mapStateToProps, actions)(Feature);