import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getDataCommerces} from '../../store/commerceSlice'

export default function CommercesList() {
    
const dispach = useDispatch()
useEffect(() => {
    dispach(getDataCommerces())
}, [dispach])

    return (
        <div>
            list
        </div>
    )
}
