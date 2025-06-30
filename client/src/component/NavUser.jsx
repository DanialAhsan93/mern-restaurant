import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutSuccess } from '../redux/user/userSlice';

function NavUser() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

     const handleSignout = async () => {
        try {
          const res = await fetch('http://localhost:3000/api/user/signout', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            }
          });
    
          const data = await res.json();
          console.log(data);
          if(res.ok) {
            dispatch(signOutSuccess());
          };
    
        } catch (error) {
          console.log(error)
        }
      }

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
      <DropdownItem onClick={handleSignout}>Sign out</DropdownItem>
    </Dropdown>
  )
}

export default NavUser;