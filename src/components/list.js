import React from 'react';
export default function({data}) {
    return data.map(res => <p key={res}>{res}</p>)
}