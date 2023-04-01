import { useState } from 'react'
function Son(props: any) {
  const {fatherSay, sayFather} = props;
  return (
    <div className="son">
      son component
      <div>father say to me: { fatherSay }</div>
      <input placeholder="I talk to my father " onChange={(e) => sayFather(e.target.value)}/>
    </div>
  )
}

function Father(props: any) {
  const [childSay, setChildSay] = useState("")
  const [fatherSay, setFatherSay] = useState("");
  return (
    <div className="father">i am father 
     <div>child told with me: {childSay}</div>
     <input placeholder="我对子组件说" onChange={ (e)=>setFatherSay(e.target.value) }   />
     <Son fatherSay={fatherSay}  sayFather={ setChildSay }  />
    </div>
  )
}