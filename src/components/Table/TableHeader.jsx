import { Box, Flex, FormLabel, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { blockStyle } from './CommerceCard'
import { TriangleUpIcon, TriangleDownIcon, MinusIcon } from '@chakra-ui/icons'
import { tableHeader } from '../../store/constants'

export default function TableHeader({
    handleOrderByCommerce,
    handleOrderByCuit,
    handleShowState,
    orderCommerce,
    orderCuit,
    stateActive
}) {


    return (
        <Flex>

            {
                tableHeader.map((element, index) => (

                    <Box key={index} style={blockStyle}>

                        <FormLabel>

                            {
                                element == "COMMERCE" ?
                                    <Box d="grid" pt="2" size="sm"
                                        onClick={handleOrderByCommerce}>

                                        {element}

                                        <Box d="flex" justifyContent="center">

                                            {
                                                orderCommerce == "acs" ? <TriangleUpIcon /> :
                                                    orderCommerce == "desc" ? <TriangleDownIcon /> :
                                                        <MinusIcon />
                                            }

                                        </Box>
                                    </Box>

                                    : element == "CUIT" ?
                                        <Box d="grid" pt="2" onClick={handleOrderByCuit}>

                                            {element}

                                            <Box d="flex" justifyContent="center">

                                                {
                                                    orderCuit == "acs" ? <TriangleUpIcon /> :
                                                        orderCuit == "desc" ? <TriangleDownIcon /> :
                                                            <MinusIcon />
                                                }
                                            </Box>

                                        </Box>

                                        : element == "STATE" ?
                                            <Box d="grid" pt="2" onClick={handleShowState}>

                                                {element}

                                                <Box d="flex" justifyContent="center">

                                                    {
                                                        stateActive == true ? <TriangleUpIcon /> :
                                                            stateActive == false ? <TriangleDownIcon /> :
                                                                <MinusIcon />
                                                    }
                                                </Box>

                                            </Box>
                                            
                                            : <Text>{element}</Text>
                            }

                        </FormLabel>

                    </Box>
                ))
            }
        </Flex>
    )
}
