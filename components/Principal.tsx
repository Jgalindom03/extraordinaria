import { FunctionComponent } from "preact"
type Data={
    message:string,
}

const Principal:FunctionComponent<Data>=({message})=>(
    <div class="main-container">
        <div class= "dni-input-container">
            < form method="post">
            <label for ="dni">
                Introduce tu dni
            </label>
            <input type="text" name="dni" id="dni" />
            <button type= "submit">Ir a mi agenda</button>
            </form>
            {message && <div class="error">{message}</div>}
        </div>
        </div>

)
export default Principal;