import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import CommerceCard from './CommerceCard';
import TableHeader from './TableHeader';
import PaginationNav from './PaginationNav';
import { getCommerces } from '../../store/helpers';
import { useSelector } from 'react-redux';
import { selectAllCommerces } from '../../store/commerceSlice'

export default function CommercesList({ search }) {

    const [orderCommerce, setOrderCommerce] = useState(null);

    const [orderCuit, setOrderCuit] = useState(null);

    const [stateActive, setStateActive] = useState(null);

    const [nextPage, setNextPage] = useState(null)

    const handleOrderByCommerce = () => {
        orderCommerce == null ? setOrderCommerce("acs") & setOrderCuit(null) :
            orderCommerce == "acs" ? setOrderCommerce("desc") :
                setOrderCommerce(null)
    };

    const handleOrderByCuit = () => {
        orderCuit == null ? setOrderCuit("acs") & setOrderCommerce(null) :
            orderCuit == "acs" ? setOrderCuit("desc") :
                setOrderCuit(null)
    };

    const handleShowState = () => {
        stateActive == null ? setStateActive(true) :
            stateActive == true ? setStateActive(false) :
                setStateActive(null)
    };

    const handleNextPage = (page) => {
        setNextPage(page + 1)
    };

    const handlePrevPage = (page) => {
        setNextPage(page - 1)
    };

    getCommerces({
        search,
        orderCommerce,
        orderCuit,
        stateActive,
        nextPage
    });

    const data = useSelector(selectAllCommerces);
    console.log("DATA RECIVED FROM API:", data)

    return (
        <Box>
            <Box d="flex" justifyContent="center" >

                <PaginationNav
                    data={data}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                />

            </Box>

            <Box d="flex" justifyContent="center">

                <Box d="grid" overflowX="scroll"
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


                </Box>

            </Box>

        </Box>
    )
}


