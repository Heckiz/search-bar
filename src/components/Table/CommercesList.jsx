import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import CommerceCard from './CommerceCard';
import TableHeader from './TableHeader';
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

    const handleBackPage = (page) => {
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
        <>
            {
                data.data.length != 0 &&
                <Box>
                    {
                        data.page > 1 &&

                        <Button onClick={() => handleBackPage(data.page)}>
                            back
                        </Button>
                    }

                    {
                        data.page != data.pages &&
                        data.data.length == data.pagePerPage &&

                        <Button onClick={() => handleNextPage(data.page)}>
                            next
                        </Button>
                    }

                </Box>
            }
            
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
        </>
    )
}


