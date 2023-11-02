import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


const FilterSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By:Relevance
            </MenuButton>
            <MenuList>
                <MenuItem as={Button}>Relevance</MenuItem>
                <MenuItem as={Button}>Date added</MenuItem>
                <MenuItem as={Button}>Name</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default FilterSelector