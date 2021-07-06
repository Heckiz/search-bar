import React, { useState, useEffect } from 'react'
import { getDataCommerces } from '../store/commerceSlice'
import { useDispatch } from 'react-redux'
import { Box, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"

export default function SearchBar() {

    const [search, setSearch] = useState("")

    const dispach = useDispatch();

    useEffect(() => {
        dispach(getDataCommerces({search:search}))
    }, [search])


    const handleChange = (event) => {
        setSearch(event.target.value)
    };

    return (
        <Box
            h="20vh" d="flex"
            justifyContent="center"
            alignItems="center"
            border="2px solid black"
        >

            <InputGroup
                w={{ base: "90%", md: "70%", lg: "60%", xl: "50%" }}
            >
                <Input
                    pr="20"
                    placeholder="Search Commerce"
                    onChange={handleChange}
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
