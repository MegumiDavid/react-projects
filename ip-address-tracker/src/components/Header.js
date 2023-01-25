import React, { useContext } from 'react'

import Input from './Input'
import IpData from './IpData'

function Header() {

  return (
    <header className="header">
        <div className="padding">
            <h1>IP Address Tracker</h1>
            <Input />
        </div>
        <IpData />
    </header>
  )
}

export default Header