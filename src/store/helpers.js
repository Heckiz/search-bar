import { useEffect } from 'react'
import { getDataCommerces } from './commerceSlice'
import { useDispatch } from 'react-redux'

export const getCommerces = ({ search, orderCommerce, orderCuit, stateActive, nextPage }) => {
    const dispach = useDispatch();
    useEffect(() => {
        dispach(getDataCommerces({ search, orderCommerce, orderCuit, stateActive, nextPage }))
    }, [search, orderCommerce, orderCuit, stateActive, nextPage])

}