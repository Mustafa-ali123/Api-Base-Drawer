import Alert  from './Alert'
import React, { useEffect, useState } from 'react'

const Comment = () => {

  const [val,setval]=useState(true)

// useEffect(()=>{
//   console.log("ok")
// setTimeout(() => {
//   setval(false)
//   console.log("ok2")
//   console.log(val)
// }, 3000);
// },[val])
  
  return (
    <>
      <h1>Comment</h1>
      {/* <button onClick={show}>xxx</button> */}
      <Alert title="This is My Modal" body='This is my dumy Duis mollis, est non commodo luctus, nisi erat porttitor ligula.' 
      opened={val} closed={false}
      />
    </>
  )
}



export default Comment
