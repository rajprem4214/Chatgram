"use client"
import React, { useEffect } from 'react'
import { userProps } from '@/types'
import { shallow }from 'zustand/shallow';
import { useAllUsers } from '@/store/userStore';
import { fetchUsers } from '@/lib/fetchers';
import ChatItem from './ChatItem';
import { io } from "socket.io-client"

const ChatList = ({ mySelf }: { mySelf: userProps }) => {
    const { users, setUsers } = useAllUsers((state: any) => ({ users: state.users, setUsers: state.setUsers }), shallow);


    const socket = io("http://localhost:4000");

    useEffect(() => {
        socket.on("new-user", () => {
            fetchUsers(mySelf, setUsers)
        })
    }, [])

    useEffect(() => {
        fetchUsers(mySelf, setUsers)
    }, [])

    return (
        <ul className='my-5 flex flex-col'>
            {
                users ? (
                    users?.reverse()?.map((user: any) => <ChatItem key={user._id} user={user} />)

                ) : (
                    <span className='loading loading-ring w-16'></span>
                )
            }
        </ul>
    )
}

export default ChatList