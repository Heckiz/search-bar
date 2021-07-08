import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCommerces } from '../../store/commerceSlice'
import CommerceCard from './CommerceCard';
import TableHeader from './TableHeader';

export default function CommercesList({
    handleOrderByCommerce,
    handleOrderByCuit,
    handleShowState,
    orderCommerce,
    orderCuit,
    stateActive,
    handleNextPage
}) {
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
                data.data.map((commerce) => (

                    <Box key={commerce.id} >
                        <CommerceCard commerce={commerce} />
                    </Box>
                ))
            }
            <Button onClick={() => handleNextPage(data.page)}>
                next
            </Button>
        </Box>
    )
}
