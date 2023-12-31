import React, {useEffect,useState} from "react";

const PokemonFragment = ({imagen, titulo, textoDescripcion}) => {
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                    <img src={imagen} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                            <p className="card-text">{textoDescripcion}</p>
                    </div>
            </div>
        </>
    )
}
export default PokemonFragment