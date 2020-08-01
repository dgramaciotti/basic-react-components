import React from 'react';
export default (props) => {
    
    return (<div>
        {React.Children.map(props.children, (child, key) => {
            return React.cloneElement(child, {...props, key: key})
        })}
    </div>)
}