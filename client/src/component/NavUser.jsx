import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavUser() {
    const { currentUser } = useSelector((state) => state.user);

  return (
    <Dropdown
      label={
        <Avatar alt={currentUser.username} img={currentUser.profilePicture} rounded />
      }
      arrowIcon={false}
      inline
      color={'red'}
    >

      <DropdownHeader>
        <span className="block truncate text-sm font-medium">{currentUser.email}</span>
      </DropdownHeader>
      <Link to={'/dashboard?tab=profile'}>
        <span className='ps-4 text-sm font-normal text-gray-200'>
          Profile
        </span>
      </Link>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  )
}

export default NavUser;