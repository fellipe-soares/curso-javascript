
const nota1 = 7.5;
const nota2 = 8.3;
const nota3 = 7.8;
const media = (nota1 + nota2 + nota3)/3;

console.log(media);

if (media > 7) {
    console.log('Aluno Aprovado');
}else if (media < 5) {
    console.log('Aluno Reprovado');
}else if (media >=5 && media <=7) {
    console.log('Recuperação');
}