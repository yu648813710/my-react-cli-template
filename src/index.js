import React from 'react';
import List from './list'

const show = () => {
    console.log(6)
}


let num = 1;

const buttonClick = () => {
    console.log(num++)
}

const Button = () => <button onClick={buttonClick}>点击1</button>

export default  () => (<div>
    <h1 onClick={show}>123</h1>
    <List data={['one','two','three']} />
    <Button />
</div>)