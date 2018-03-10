import React from 'react';
import { Component } from 'react';

export default class UserReposTable extends Component {

    state = {repos: []}

    componentWillMount = () => {
        this.setState({
            repos: this.props.repos
        });
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.repos !== this.props.repos) {
            this.setState({
                repos: nextProps.repos
            });
        }
    }

    render ()  {
        const repos = this.state.repos;
        return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name of Repo</th>
                            <th>Description</th>
                            <th>URL</th>
                            <th>Number of Forks</th>
                            <th>Number of Watchers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            repos.map((repo, index) => <tr key={index} >
                                    <td>{repo.name}</td>
                                    <td>{repo.description && repo.description.length > 80 ? repo.description.slice(0, 80) + '...' : repo.description} </td>
                                    <td>{repo.url}</td>
                                    <td>{repo.forks_count}</td>
                                    <td>{repo.watchers_count}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}