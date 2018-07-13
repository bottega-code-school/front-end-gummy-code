import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log('fields');
    } 

    render() {
        return (
            <div className='review'>
                <PageTitle className='review__page-title' title='Order Review'/>
                <ReviewForm className='review__form' onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

Review = connect(null, actions)(Review);

export default Review;