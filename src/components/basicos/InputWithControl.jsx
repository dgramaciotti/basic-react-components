import React, {useState} from 'react';

export default () => {
    const [value, setValue] = useState('Initial');
    function onChangeEvent(e){
        setValue(e.target.value)
    }
    return (<div>
        <div>{value}</div>
        <input value={value} onChange={onChangeEvent} />
    </div>)
}