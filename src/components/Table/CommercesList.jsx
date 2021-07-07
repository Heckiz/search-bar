import { Box } from '@chakra-ui/react';
import React from 'react';
import {  useSelector } from 'react-redux';
import { selectAllCommerces } from '../../store/commerceSlice'
import CommerceCard from './CommerceCard';
import TableHeader from './TableHeader';

export default function CommercesList({handleOrder}) {

    const data = useSelector(selectAllCommerces.selectAll);


    return (
        <Box d="grid" 
        >
            <TableHeader handleOrder={handleOrder}/>
            {
                data.map((commerce) => (

                    <Box key={commerce.id} >
                        <CommerceCard commerce={commerce} />
                    </Box>
                ))
            }

        </Box>
    )
}
