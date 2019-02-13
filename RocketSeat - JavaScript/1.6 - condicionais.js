function retornaSexo(sexo) {
  if (sexo === "M") {
    return "Masculino";
  } else if (sexo === "F") {
    return "Feminino";
  } else {
    return "Outro";
  }
}

function retornaHumano(tipo) {
  switch (tipo) {
    case "H":
      return "Humano";
    case "M":
      return "Murloc";
    default:
      return "Outro";
  }
}

var resultado = retornaSexo("M");
