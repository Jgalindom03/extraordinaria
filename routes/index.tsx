import Principal from "../components/Principal.tsx"
import ListContact from "../islands/ListContact.tsx";
import {FreshContext, Handlers, PageProps} from"$fresh/server.ts"
import {Contact} from "../types.ts"
import {getCookies, setCookie} from "$std/http/cookie.ts"
import Añadir from "../components/Añadir.tsx";

type Data={
  message:string,
}
export const handler:Handlers={
  POST:async(req:Request, ctx:FreshContext)=>{
    const form= await req.formData()
    const dni= form.get("dni")?.toString()||""

    if(dni.length!==9){
      return ctx.render({message:"EL dni tiene que tener 9 carat"})
    }
else{
  const headers= new Headers()
  setCookie(headers,{

    name:"dni",
    value:dni,
    path:"/"

  })
  headers.set("location", "/contact")
return new Response(null,{
  status:303,
  headers
})
}

  }
}

const Page=(props:PageProps<Data>)=>{
<Principal message={props.data?.message}/>
}
export default Page;