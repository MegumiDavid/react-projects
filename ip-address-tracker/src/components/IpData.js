import React, { useContext } from 'react'
import { IpContext } from '../IpContext'

function IpData() {
  const [ipSearch, setIpSearch] = useContext(IpContext)

  return (
    <div className="ip padding">
        <div className="ip__wrapper">
            <div className="ip__box">
                <h2 className="title">IP Address</h2>
                <h3 className="data ip-data"> 
                    {ipSearch ? ipSearch.ip : ' '}
                </h3>
            </div>
            <div className="stripe"></div>
            <div className="ip__box">
                <h2 className="title">Location</h2>
                <h3 className="data">
                    {ipSearch.location ? `${ipSearch.location.country}, ${ipSearch.location.region}` : ' '}
                </h3>
            </div>
            <div className="stripe"></div>
            <div className="ip__box">
                <h2 className="title">Timezone</h2>
                <h3 className="data">
                    {ipSearch.location ? `UTC ${ipSearch.location.timezone}` : ' '}
                    
                </h3>
            </div>
            <div className="stripe"></div>
            <div className="ip__box">
                <h2 className="title">ISP</h2>
                <h3 className="data">
                    {ipSearch ? ipSearch.isp : ' '}
                </h3>
            </div>
        </div>
    </div>
  )
}

export default IpData