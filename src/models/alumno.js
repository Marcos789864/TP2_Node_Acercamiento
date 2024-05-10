const alumno = 
{
    username: "",
    dni: "",
    edad:0
}

function Alumno(user,dn,ed)
{
    this.username = user;
    this.dni = dn;
    this.edad = ed;
}

Alumno.prototype.toString = function AlumnoToString()
{
    var retorno = `Alumno ${this.username},dni ${this.dni}, edad: ${this.edad}`
    return retorno;
}



export{alumno,Alumno};