import { useState } from "react"
import "../styles/visorprestamo.css"
import { CalcularTotal } from "../helpers"
import { Resultado } from "./resultado"
export const VisorPrestamo = ({inputValue, setInputValue, plazo, setPlazo}) => {

    const [error, setError] = useState(false)
    const [totalPagar, setTotalPagar] = useState(null)
    
 
    
    const handleOnChangePrestamo = (e)=> {
        setInputValue(e.target.value)
        
    }
    const handleOnChangePlazo = (e)=> {
        setPlazo(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!inputValue || !plazo) {
            return setError(true)
        }

        setError(false)

       const meses = parseInt(plazo.split("")[0],10)
        const cotizacion = CalcularTotal(inputValue, meses)
        const cuota = cotizacion / meses
        setTotalPagar({
            cantidadSolicitada: inputValue,
            plazoSolicitado: plazo,
            cuota,
            cotizacion
        })
       
      setInputValue("")
      setPlazo("")
    }

    return (
        <>
        <div className="container-prestamo">
            <form onSubmit={handleSubmit} className="container__form-prestamo">
                <div className="form__cantidad-prestamo">
                    <div className="cantidad-prestamo">
                        <label htmlFor="number">Cantidad Prestamo</label>
                        <input 
                        value={inputValue}
                        type="number" 
                        id="number"
                         onChange={handleOnChangePrestamo}
                        />
                    </div>
                    <div className="plazo">
                        <label htmlFor="plazo">Plazo para pagar</label>
                        <select id="plazo" value={plazo} onChange={handleOnChangePlazo}>
                            <option value="">Seleccionar</option>
                            <option value="3 meses">3 meses</option>
                            <option value="6 meses">6 meses</option>
                            <option value="12 meses">12 meses</option>
                            <option value="24 meses">24 meses</option>
                        </select></div>
                </div>


                <button >Calcular</button>
            </form>
        </div>

            <Resultado
                totalPagar={totalPagar}
                error={error}
            ></Resultado>
        
         </>
    )
}
