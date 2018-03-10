import React from 'react';
import { Component } from 'react';
import { getUserRepos } from '../api/index';
import UserReposTable from './UserReposTable';

export default class UserProfile extends Component {

    state = {userRepos: []};
    
    onShowRepos = () => {
        getUserRepos(this.props.userProfile.login).then(
            (response) => {
                let userProfile = response;
                this.setState({ userRepos: userProfile});
            }
        );
    };

    render ()  {

        return (
            Object.keys(this.props.userProfile).length ?
                <div> 
                    <p>User name: {this.props.userProfile.name} </p>
                    <p>User company: {this.props.userProfile.company ? this.props.userProfile.name : '-'}</p>
                    <p>User email: {this.props.userProfile.email ? this.props.userProfile.email : '-'} </p>
                    <p>User followers: {this.props.userProfile.followers ? this.props.userProfile.followers : '-'} </p>
                    <p>User account updated at: {this.props.userProfile.updated_at ? this.props.userProfile.updated_at : '-'} </p>
                    <p>Avatar: {this.props.userProfile.avatar_url ? this.props.userProfile.avatar_url : '-'} </p>
                    <button onClick={this.onShowRepos}>Show user repos</button>
                    { this.state.userRepos.length ? <UserReposTable repos={this.state.userRepos}/> : null }
                </div>
                : null
        );
    }
}