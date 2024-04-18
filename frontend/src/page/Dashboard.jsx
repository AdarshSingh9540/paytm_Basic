import React from 'react'
import { Appbar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'


function Dashboard() {
  return (
    <div>
        <Appbar/>
        <div className=''>
            <Balance value={"10,0000"} />
          <Users/>
        </div>
    </div>
  )
}

export default Dashboard