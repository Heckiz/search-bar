import { Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react'


export default function PaginationNav({
    data,
    handleNextPage,
    handlePrevPage
}) {
    return (
        <Box p="2" w={{ base: "100%", lg: "70%", xl: "50%" }}>

            {
                data.data.length != 0 &&
                <Flex >

                    {///Prev Page Button
                        data.page > 1 &&
                        <IconButton
                            variant="outline"
                            colorScheme="teal"
                            icon={<ArrowLeftIcon />}
                            onClick={() => handlePrevPage(data.page)}
                        />
                    }

                    <Spacer />

                    <Box d="flex" alignItems="center">
                        <Text as="samp"> Page {data.page}</Text>
                    </Box>

                    <Spacer />

                    {///Next Page Button
                        data.page != data.pages &&
                        data.data.length == data.pagePerPage &&
                        <IconButton
                            variant="outline"
                            colorScheme="teal"
                            icon={<ArrowRightIcon />}
                            onClick={() => handleNextPage(data.page)}
                        />
                    }

                </Flex>
            }
        </Box>
    )
}
