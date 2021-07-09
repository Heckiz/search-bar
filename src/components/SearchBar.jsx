import React from 'react'
import { Box, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"

export default function SearchBar({handleSearch}) {

    return (
        <Box
            h="20vh" d="flex" bg="blue.200"
            justifyContent="center"
            alignItems="center"
            boxShadow="xl"
        >

            <InputGroup
                w={{ base: "90%", md: "70%", lg: "60%", xl: "50%" }}
            >
                <Input
                    bg="white"
                    pr="20"
                    placeholder="Search Commerce"
                    onChange={handleSearch}
                />

                <InputRightElement pr="3">
                    <Button size="sm" >
                        <SearchIcon />
                    </Button>
                </InputRightElement>

            </InputGroup>

        </Box>
    )
}
