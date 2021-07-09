import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import moment from 'moment';

export const blockStyle = {
    display: 'flex',
    boxShadow: 'lg',
    border: '2px solid black',
    width: '110px',
    overflow: 'hidden',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    paddingX: '20px'
};

export default function CommerceCard({ commerce }) {
    let values = Object.entries(commerce);
    return (
        <Flex>

            {
                values.map((element, index) => (     ///key = element[0] && value element[1]

                    (element[0] == 'active' && element[1] == true) ?
                        <Box key={index} style={blockStyle} bg="green.200">
                            <Text>ACTIVE</Text>
                        </Box>

                        : (element[0] == 'active' && element[1] == false) ?
                            <Box key={index} style={blockStyle} bg="red.200">
                                <Text>INACTIVE</Text>
                            </Box>

                            : (element[0] == 'id' || element[0] == 'commerce' || element[0] == 'cuit') ?
                                <Box key={index} style={blockStyle} >
                                    <Tooltip label={element[1]}>
                                        <Text as="cite" color="black">{element[1]}</Text>
                                    </Tooltip>
                                </Box>

                                : (element[0] == 'lastSale') ?
                                    <Box key={index} style={blockStyle}>
                                        <Text>{moment(element[1]).format('l')}</Text>
                                    </Box>

                                    : <Box key={index} style={blockStyle}>
                                        <Text>${element[1]}</Text>
                                    </Box>

                ))
            }
        </Flex>
    )
}
