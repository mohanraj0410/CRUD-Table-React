import React from 'react'
import { useSelector } from 'react-redux'
import StudentsTable from './StudentsTable'
import { Avatar } from 'antd'

const Body = () => {
    let username = useSelector((store) => store.user.user)
    // let user = "User"
    let firstLetter = username.name == undefined ? "U" : username.name.charAt(0);
    // console.log(firstLetter)
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome , {username.name ? username.name : "User"} !</h1>
            <h3 style={{ float: "right", margin: "10px" }}>{username.name ? username.name : "User"}  <Avatar style={{
                backgroundColor: '#87d068',
            }}>{firstLetter}</Avatar></h3>
            <StudentsTable />
        </div>
    )
}

export default Body