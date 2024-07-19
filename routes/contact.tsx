import ListContact from "../islands/ListContact.tsx";
import {FreshContext, Handlers, PageProps} from"$fresh/server.ts"
import {Contact} from "../types.ts"
import {getCookies} from "$std/http/cookie.ts"
import Añadir from "../components/Añadir.tsx"

type Contacts = {
    contactos:Contact[]
    dni:string
}

export const handler: Handlers={
    POST:async(req:Request, ctx:FreshContext)=>{
        const dni= getCookies(req.headers).dni;
        const form= await req.formData()
        const email= form.get("email")?.toString()||""
        const name= form.get("name")?.toString()||""

        console.log(email+name+dni);

        await fetch(`https://apicontacts.deno.dev/contact/`,{
            method:"POST",
            headers: {"Content-Type": "application/json" },
            body:JSON.stringify({name,email,dni})
    })
    const response= await fetch(`https://apicontacts.deno.dev/contacts/dni`,{
        method:"GET",
        headers: {"Content-Type": "application/json" },
})

const contactos= await response.json()
return ctx.render({contactos:contactos, dni})
    }
}

const Page=(props:PageProps<Contacts>)=>{
    return(
        <>
        <div class="main-container">
            <div class="contact-container">
                <h1 >Contactos de{props.data.dni}</h1>
                <ul>
                    <ListContact contactos={props.data.contactos}/>
                </ul>
                <Añadir/>
            </div>
            </div>
        </>
    )
}
export default Page