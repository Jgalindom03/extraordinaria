
import { FunctionComponent } from "preact"
const Añadir: FunctionComponent=()=>(
    <div class="add-contact-container">
        <h1>Añadir contacto</h1>
        <form method="post">
            <label for="name">Nombre:</label>
            <input type="text" name="name" id="name" placeholder="Nombre" />
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="email" 
            />
                <button type ="submit">
                Añadir Contacto
                </button>
                </form>
                </div>

)
export default Añadir