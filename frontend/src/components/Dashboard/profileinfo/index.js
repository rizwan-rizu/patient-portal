import React from 'react';
import { Box } from '@material-ui/core';
import Profile from '../../Profile'
import {useSelector} from 'react-redux'
import { userstate } from '../../../redux/selectors';
import PageHeader from '../../common/header'

function ProfileInfo() {
    const user = useSelector(userstate).userReducer
    return (
        <Box>
            <PageHeader title="PROFILE" />
            <Profile 
                user_firstName= {user.firstname}
                user_lastName = {user.lastname}
                user_cnic = {user._id}
                user_age = {user.age}
                user_address= {user.address}
                user_mobile= {user.phone}
                user_email = {user.email}
            />
        </Box>
    );
}

export default ProfileInfo;