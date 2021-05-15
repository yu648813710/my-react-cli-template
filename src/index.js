import React, { useState } from 'react';
import List from './list'

const show = () => {
    console.log(6)
}


let num = 1;


export default  () => {
const [isHidden, setHidden] = useState(false);


const buttonClick = () => {
    console.log(num++)
    setHidden(!isHidden)
}

const Button = () => <button onClick={buttonClick}>点击1</button>

return (<div>
        <h1 onClick={show}>123</h1>
        {isHidden && <h2>副标题</h2>}
        <List data={['one','two','three', '4']} />
        <Button />
    </div>)
}