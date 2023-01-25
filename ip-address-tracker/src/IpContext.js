import React, { useState, createContext } from "react"

export const IpContext = createContext()

export const IpProvider = (props) => {
    const [ipSearch, setIpSearch] = useState({})

    return (
        <IpContext.Provider value={[ipSearch, setIpSearch]}>
            {props.children}
        </IpContext.Provider>
    )
}