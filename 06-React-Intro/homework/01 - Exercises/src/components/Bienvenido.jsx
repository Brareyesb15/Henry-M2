import React from "react";
import Botones from "./Botones.jsx";

const studentName = "Brandon Reyes";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };


export default function Bienvenido() {
  // el código de tu componente acá
  return (  
    <div>
      <h1>Chaparreando React</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((t,i) => <li key = {i}> {t}</li>)}
      </ul>
      <Botones alerts = {alerts}  /> 
    </div>
    


  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
