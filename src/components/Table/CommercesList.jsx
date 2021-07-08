import { Box, Button } from '@chakra-ui/react';
import React , { useState }from 'react';

import CommerceCard from './CommerceCard';
import TableHeader from './TableHeader';
import api from '../../store/commerceAPISlice'

export default function CommercesList({search}) {

    const [orderCommerce, setOrderCommerce] = useState(null);
    const [orderCuit, setOrderCuit] = useState(null);
    const [stateActive, setStateActive] = useState(null);

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

  const data = api.useGetCommerceDataQuery({search, orderCommerce, orderCuit, stateActive})
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
             {/* {
                data.map((commerce) => (

                    <Box key={commerce.id} >
                        <CommerceCard commerce={commerce} />
                    </Box>
                ))
            } */}
            <Button onClick={() => handleNextPage(data.page)}>
                next
            </Button>
        </Box>
    )
}
