import React, {useState } from "react";

const Traffic = () =>{
    const [color, setColor] = useState("")
    const [colores, setColores] = useState(["red","yellow","green"])

    function selectColor(lightColor, index) {
        return(
            <div
            key={index}
            onClick={()=>setColor(lightColor)}
            className={
                color==lightColor?"selected light " + lightColor:"light " + lightColor
            }>
            </div>
        )
    }
    
    function newLight() {
        let newColor = [...colores,"purple"]
        setColores(newColor)


    }

    function alternar(){
        let aleatorio = Math.floor(Math.random() * colores.length)
        if (colores[aleatorio] == color){
            alternar()
        } else{
            setColor(colores[aleatorio])
        }
    }

    return(
        <div>
            <div className="post"></div>
            <div className="box">
               {
                colores.map(selectColor)
               }
            </div>
            <div className="d-flex flex-column">
                <button onClick={()=>newLight()} className="mt-4 btn btn-primary
                ">Agregar purpura</button>
                <button onClick={()=>alternar()} className="mt-4 btn btn-danger
                ">Alternar colores</button>
            </div>
        </div>
    )
}

export default Traffic