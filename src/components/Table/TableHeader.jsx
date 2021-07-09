import { Box, Flex, FormLabel, Text } from '@chakra-ui/react'
import React from 'react'
import { blockStyle } from './CommerceCard'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { commerceHeader } from '../../store/constants'

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
                commerceHeader.map((element, index) => (

                    <Box key={index} style={blockStyle}>

                        <FormLabel>


                            {
                                element == "COMMERCE" ?

                                    <Box  onClick={handleOrderByCommerce}>

                                        {element}
                                        {orderCommerce == "acs" && <ChevronUpIcon />}
                                        {orderCommerce == "desc" && <ChevronDownIcon />}

                                    </Box> :



                                    element == "CUIT" ?

                                        <Box onClick={handleOrderByCuit}>
                                            {element}

                                            {orderCuit == "acs" && <ChevronUpIcon />}
                                            {orderCuit == "desc" && <ChevronDownIcon />}

                                        </Box> :


                                        element == "STATE" ?

                                            <Box onClick={handleShowState}>
                                                {element}

                                                {stateActive == true && <ChevronUpIcon />}
                                                {stateActive == false && <ChevronDownIcon />}

                                            </Box> :

                                            <Text>
                                                {element}
                                            </Text>
                            }

                        </FormLabel>

                    </Box>
                ))
            }
        </Flex>
    )
}
