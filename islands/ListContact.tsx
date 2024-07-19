import { FunctionComponent } from "preact"
import { Contact } from "../types.ts"
import Delete from "../components/Delete.tsx"
import { useEffect } from "preact/hooks"

type List={
    contactos:Contact[]
}

const ListContact:FunctionComponent<List>=({contactos})=>{
    return(
        contactos.map((contacto)=>(
            <li>
                <div>{contacto.name}</div>
                <div>{contacto.email}</div>
                <Delete contacto={contacto}/>
            </li>
        )
    )
    )
}
export default ListContact