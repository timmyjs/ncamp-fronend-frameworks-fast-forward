import React from 'react';

const UserInput = ({ username, onChangeInput, onClickButton }) => (
    <div>
        <p>Input your name:</p>
        <input value={username} onChange={onChangeInput}/>
        <button onClick={onClickButton} >Save name</button>
    </div>
);

export default UserInput;