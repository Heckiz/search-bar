import React from 'react'
import { Box, Input, InputGroup, InputRightElement,Button } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"

export default function SearchBar() {
    return (
        <Box h="max-content" m="5">

            <InputGroup size="md">

                <Input
                    pr="20"
                    placeholder="Search Commerce"
                />

                <InputRightElement width="25%">
                    <Button  size="sm" >
                        <SearchIcon/>
                    </Button>
                </InputRightElement>

            </InputGroup>
            
        </Box>
    )
}
