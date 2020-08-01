import React from 'react';

export default props => {
    const callback = props.triggerChanges;
    return (<div>
        <div>Son component</div>
        <button onClick={ e => {callback('Information passed!') ; console.log(e)}}>Pass Information</button>
    </div>)
}