import Messages from '@/components/Chat-Threads/Messages'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen'>
        <div className='mx-auto flex'>
          <Sidebar />
          <Messages />
        </div>
    </div>
  )
}

export default Page