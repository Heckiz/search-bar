import { useEffect } from 'react'
import { getDataCommerces } from './commerceSlice'
import { useDispatch } from 'react-redux'

export const API_BASE_URL = "http://localhost:3000/stores";

export const getCommerces = ({ search, orderCommerce, orderCuit }) => {
    const dispach = useDispatch();
    useEffect(() => {
        dispach(getDataCommerces({ search, orderCommerce, orderCuit }))
    }, [search, orderCommerce, orderCuit])


}