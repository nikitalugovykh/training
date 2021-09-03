import React from 'react';

const StepList = ({steps}) => {
    console.log('steps: ', steps);
    return (
            steps.map((step, i) => 
            <p key ={ i + Date.now() + Math.random() }>{ step }</p>
        )
    )
}
export default StepList