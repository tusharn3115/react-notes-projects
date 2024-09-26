import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://api.github.com/users/tusharn3115')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-5 bg-gray-600 text-white p-4 text-3xl flex items-center justify-center flex-col gap-6'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github profile picture" width={300} />
    </div>
  )
}

export default Github