import React from 'react';
import './list.less'

export default function({data}) {
    return data.map(res => <p key={res}>{res}</p>)
}