import {useState} from 'react'

const Calendar = () => {
  const today = new Date()
  const month = today.toLocaleString('default', {month: 'long'})
  const year = today.getFullYear()
  return (<>
  <h2>Upcoming Month: {month} - {year}</h2>
  
  
  </>  
  )
}

export default Calendar