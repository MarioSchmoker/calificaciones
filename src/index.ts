let nombre: string;
let nota1, nota2, nota3, notaFinal: number;
nota1 = 0;
nota2 = 0;
nota3 = 0;
notaFinal = 0;

while (nombre !== "") {
  nombre = prompt("Ingrese Nombre del Alumno");

  nota1 = Number(prompt("Ingrese nota de Práctica"));
  if (nota1 <= 10) {
    nota1 = nota1 * 0.1;
  } else {
    console.log("error");
    break;
  }
  nota2 = Number(prompt("Ingrese nota de Problemas"));
  if (nota2 <= 10) {
    nota2 = nota2 * 0.5;
  } else {
    console.log("error");
    break;
  }
  nota3 = Number(prompt("Ingrese nota de Téoria"));
  if (nota3 <= 10) {
    nota3 = nota3 * 0.4;
  } else {
    console.log("error");
    break;
  }
  notaFinal = nota1 + nota2 + nota3;

  console.log("La nota final del Alumno ", nombre, " es ", notaFinal);
  break;
}
