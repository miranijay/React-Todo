import React, { useEffect, useState } from 'react'

const TodoDate = () => {

    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();

            setDateTime(`${formatedDate} - ${formatedTime}`)
        }, 1000);

        return () => clearInterval(interval);
    }, [])

  return (
    <h2 className="date-time">{dateTime}</h2>
  )
}

export default TodoDate;