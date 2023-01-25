import React, { useState, useContext } from 'react'
import { IpContext } from '../IpContext'
import iconArrow from '../images/icon-arrow.svg'

const Input = () => {
  
  const [inputValue, setInputValue] = useState('')
  const [ipSearch, setIpSearch] = useContext(IpContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${inputValue}`)
      const data = await response.json()
      setIpSearch(data)
    } catch (err) {
      alert('erro to fetch data')
      console.log(err);
    }
  }

  return (
    <form className="input__wrapper" onSubmit={handleSubmit}>
        <input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text" 
            className="input" 
            placeholder="Search for any IP address or domain" 
        />

        <button type="submit" className="btn">
            <img src={iconArrow} alt="icon-arrow" />
        </button>
    </form>
  )
}

export default Input