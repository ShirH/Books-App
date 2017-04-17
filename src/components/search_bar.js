import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setBookList} from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''}

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.setBookList(this.state.term);
        this.setState({term: ""});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Search for Books by Author"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">
                    Search
                </button>
                </span>
            </form>
        );
    }
}

export default connect(null, {setBookList})(SearchBar);