import React, { Component } from 'react';
import Rating from '@bit/tomlandau.belle.components.rating';

class UserFeedback extends Component {
    render() {
        return (
            <div>
                <p>Please rate our app:</p>
                <Rating defaultValue={4} character='•'></Rating>
            </div>
        );
    }
}

export default UserFeedback;