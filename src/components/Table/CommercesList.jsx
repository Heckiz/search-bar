import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataCommerces } from '../../store/commerceSlice'
import CommerceCard from './CommerceCard';

export default function CommercesList() {

    const dispach = useDispatch()
    useEffect(() => {
        dispach(getDataCommerces())
    }, [dispach])

    return (
        <Box h="80vh"
            border="2px solid green"
        >
            <Box border="2px solid orange" d="flex" justifyContent="center">
            
            <CommerceCard />

            </Box>
        </Box>
    )
}
