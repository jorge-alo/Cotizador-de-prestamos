import { useState } from "react"
import { VisorPrestamo } from "./components/VisorPrestamo"
import "./styles/cotizadorapp.css"

export const CotizadorApp = () => {
    const [inputValue, setInputValue] = useState("")
    const [plazo, setPlazo] = useState("")
    

   
    return (
        <div className="container-cotizador">
            <h1>Cotizador de prestamos...</h1>
            <VisorPrestamo
                inputValue={inputValue}
                setInputValue={setInputValue}
                plazo={plazo}
                setPlazo={setPlazo}
                
            />

        </div>
    )
}
