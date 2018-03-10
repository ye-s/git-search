import React from 'react';
import { Component } from 'react';
import { getUserProfile } from '../api/index';
import UserProfile from './UserProfile';

export default class Search extends Component {

    state = {
        userName: null,
        userProfile: {},
        userRepos: []
    };
    

    onSearch = () => {
        const searchName = this.input.value;
        if (searchName) {
            getUserProfile(searchName).then(
                (response) => {
                    if (response.status !== 403) {
                        let userProfile = response;
                        this.setState({ userProfile: userProfile});
                        console.log(this.state);
                    } else {
                        console.log('User profile can\'t be retrieved.')
                    }
                });
        }
        this.input.value = null;
    };

    render ()  {
        return ( 
            <div>
                <h2>
                    Search for user repos
                </h2>
                <input ref={event => {this.input = event}}></input><button onClick={this.onSearch}>Search</button>
                <UserProfile userProfile={this.state.userProfile}/>
            </div>
                
        );
    }
}