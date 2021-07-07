import { Box, Flex, Button,FormLabel } from '@chakra-ui/react'
import React,{useState} from 'react'
import { blockStyle } from './CommerceCard'
import { ChevronUpIcon,ChevronDownIcon } from '@chakra-ui/icons'

export default function TableHeader({handleOrder}) {
    const commerceHeader = ["ID", "Commerce", "CUIT", "Concept 1", "Concept 2", "Concept 3", "Concept 4", "Concept 5", "Concept 6", "Balance", "State", "Last Sale"]

    
    return (
        <Flex>

            {commerceHeader.map((element) => (
                    <Box style={blockStyle}>
                                        <FormLabel>

                        {element}
                        {element == "Commerce" &&
                    <Button size="xs" onClick={handleOrder}>
                        {/* {orderCommerce == "acs" && <ChevronUpIcon/>}
                        {orderCommerce == "desc" && <ChevronDownIcon/>} */}
                    </Button>
                    }
                    </FormLabel>

                    </Box>
            ))}
        </Flex>
    )
}
