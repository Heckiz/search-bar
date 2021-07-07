import { useEffect } from 'react'
import { getDataCommerces } from './commerceSlice'
import { useDispatch } from 'react-redux'

export const API_BASE_URL = "http://localhost:3000/commerces";

export const getCommerces = ({search, orderCommerce}) =>{
    const dispach = useDispatch();

    useEffect(() => {
        dispach(getDataCommerces({search, orderCommerce}))
    }, [search, orderCommerce])


}