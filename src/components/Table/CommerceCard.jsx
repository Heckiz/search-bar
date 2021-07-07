import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const blockStyle = {
    d: 'flex',
    textAlign: 'center',
    boxShadow: 'lg',
    border: '2px solid black',
    marginY: '20px',
    width: '50%',
    overflow: 'hidden',
    cursor: 'pointer'


};
export default function CommerceCard({ commerce }) {

    return (
        <Box>
            <Flex  >
                <Box style={blockStyle}>
                    {commerce.id}
                </Box>
                <Box style={blockStyle}>
                    {commerce.commerce}
                </Box >
                <Box style={blockStyle}>
                    {commerce.cuit}
                </Box>
                <Box style={blockStyle}>
                    {commerce.concept_1}
                </Box>
                <Box style={blockStyle}>
                    {commerce.concept_2}
                </Box>
                <Box style={blockStyle}>
                    {commerce.concept_3}
                </Box>
                <Box style={blockStyle}>
                    {commerce.concept_4}
                </Box>
                <Box style={blockStyle}>
                    {commerce.concept_5}
                </Box>
                <Box style={blockStyle}>
                    {commerce.concept_6}
                </Box>
                <Box style={blockStyle}>
                    {commerce.balance}
                </Box>
                <Box style={blockStyle} bg={commerce.active ? 'green.200' : 'red.200'}  >
                    {commerce.active ? <Text>ACTIVO</Text> : <Text>INACTIVO</Text>}
                </Box>
                <Box style={blockStyle}>

                    {commerce.lastSale}
                </Box>
            </Flex>
        </Box>
    )
}
