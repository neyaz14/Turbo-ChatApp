"use client"
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/textinput"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  return (
    <div className="center-container">

      <TextInput onchange={()=>{alert('hi')}} placeholder="room id " classname="ui-input"></TextInput>
      <Button
      onClick={()=>{
        router.push('/chat/123')
      }}
      className="ui-button">hello button</Button>

    </div>
  );
}
