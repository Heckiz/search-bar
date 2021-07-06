import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function CommerceCard() {
    const blockStyle = {
        d: 'flex',
        textAlign: 'center',
        boxShadow:'lg',
        border: '2px solid black',
        width:'140px',
        marginY:'20px'

    };
    return (
        <Box
            maxW="80%" borderWidth="1px" borderRadius="lg"
            borderRadius="lg" 
            boxShadow="lg"
        >
            <Flex color="dark" >
                <Box style={blockStyle}>
                    id
                </Box>
                <Box style={blockStyle}>
                    commerce
                </Box >
                <Box style={blockStyle}>
                    cuit
                </Box>
                <Box style={blockStyle}>
                    concept_1
                </Box>
                <Box style={blockStyle}>
                    concept_2
                </Box>
                <Box style={blockStyle}>
                    concept_3
                </Box>
                <Box style={blockStyle}>
                    concept_4
                </Box>
                <Box style={blockStyle}>
                    concept_5
                </Box>
                <Box style={blockStyle}>
                    concept_6
                </Box>
                <Box style={blockStyle}>
                    balance
                </Box>
                <Box style={blockStyle}>
                    active
                </Box>
                <Box style={blockStyle}>
                    lastSale
                </Box>
            </Flex>
        </Box>
    )
}
