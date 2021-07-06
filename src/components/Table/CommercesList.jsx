import { Box } from '@chakra-ui/react';
import React from 'react';
import {  useSelector } from 'react-redux';
import { selectAllCommerces } from '../../store/commerceSlice'
import CommerceCard from './CommerceCard';

export default function CommercesList() {

    const data = useSelector(selectAllCommerces.selectAll);

    const commerceHeader =  {
        "id": "ID",
        "commerce": "Commerce",
        "cuit": "CUIT",
        "concept_1": "Concept 1",
        "concept_2": "Concept 2",
        "concept_3": "Concept 3",
        "concept_4": "Concept 4",
        "concept_5": "Concept 5",
        "concept_6": "Concept 6",
        "balance": "Balance",
        "active": "Active",
        "lastSale": "Last Sale"
      }
    return (
        <Box h="80vh"
        d="grid" 
        >
            
            <CommerceCard commerce={commerceHeader} />

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
