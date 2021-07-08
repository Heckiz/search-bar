import { Box } from '@chakra-ui/react';
import React, {useState} from 'react';
import {  useSelector } from 'react-redux';
import { selectAllCommerces } from '../../store/commerceSlice'
import CommerceCard from './CommerceCard';
import TableHeader from './TableHeader';

export default function CommercesList({handleOrderByCommerce, handleOrderByCuit, handleShowState, orderCommerce, orderCuit, stateActive}) {
    const data = useSelector(selectAllCommerces);
    console.log(data)
    return (
        <Box d="grid" 
        >
            <TableHeader 
            handleOrderByCommerce={handleOrderByCommerce} 
            orderCommerce={orderCommerce}

            handleOrderByCuit={handleOrderByCuit}
            orderCuit={orderCuit}

            handleShowState={handleShowState}
            stateActive={stateActive}            
            />
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
