import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { render } from '@testing-library/react';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField } from './actions';


const mapStateToProps = state =>{
    return{
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }
  
    

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

   

    render() {

        const { robots } = this.state;
        const {searchField, onSearchChange } = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);