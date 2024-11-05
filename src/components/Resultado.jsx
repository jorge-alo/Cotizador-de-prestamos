

export const Resultado = ({totalPagar, error}) => {
  return (
    <>
        { 
            totalPagar ? (
                <div className="cotizacion">
                <h2>Cotizacion: </h2>
                <p>La cantidad solicitada es: ${totalPagar.cantidadSolicitada}</p>
                <p>A pagar en: {totalPagar.plazoSolicitado}</p>
                <p>su pago mensual es de: ${totalPagar.cuota.toFixed(2)}</p>
                <p>Total a pagar: ${totalPagar.cotizacion.toFixed(2)}</p>
            </div>
            ):
        
            error ? (<div className="cotizacion"><h2>Ingrese una cantidad y un plazo</h2></div>) 
            : (<div className="cotizacion"><h2>Ingrese una cantidad y un plazo</h2></div>)
    
         } 
    </>
  )
}
