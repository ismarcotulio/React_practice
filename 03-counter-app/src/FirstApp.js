import React from 'react';

const FirstApp = ( { greeting = 'Hello World' } ) => {

    return (
        <>
            <h1> { greeting } </h1>
            <p>This is paragraph</p>
        </>
    )
}

export default FirstApp;