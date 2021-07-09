import { Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react'
import { ArrowLeftIcon,  ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react'


export default function PaginationNav({ data, handleNextPage, handleBackPage }) {

    return (
        <Box p="2" w={{ base: "100%", lg: "70%", xl:"50%" }}>
            {
                data.data.length != 0 &&
                <Flex >

                    {
                        data.page > 1 &&

                        <IconButton icon={<ArrowLeftIcon/>}
                        onClick={() => handleBackPage(data.page)}/>
                    }

                    <Spacer />

                    <Box d="flex" alignItems="center">
                        <Text as="samp"> Page {data.page}</Text>
                    </Box>

                    <Spacer />

                    {
                        data.page != data.pages &&
                        data.data.length == data.pagePerPage &&

                        <IconButton icon={<ArrowRightIcon/>}
                        onClick={() => handleNextPage(data.page)}/>
                    }

                </Flex>
            }
        </Box>
    )
}
