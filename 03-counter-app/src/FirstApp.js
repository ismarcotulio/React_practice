import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( { greeting = 'Hello World' } ) => {

    return (
        <>
            <h1> { greeting } </h1>
            <p>This is paragraph</p>
        </>
    )
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

export default FirstApp;