import { FunctionComponent } from "preact"
import {Contact} from "../types.ts"
type Data={
    contacto:Contact
}

const Delete:FunctionComponent<Data>=({contacto})=>{
    const deletecontact= async(contacto:Contact)=>{
       await fetch(`https://apicontacts.deno.dev/contact/${contacto.dni}/${contacto.id}`,{
            method:"DELETE",
            headers: {"Content-Type": "application/json" },
    })
}
    return <button onClick={(e)=> deletecontact(contacto)}>Delete</button>

}
export default Delete