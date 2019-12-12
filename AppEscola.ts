import { Pessoa } from "./Pessoa";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor"; 

var p:Pessoa;

p = new Pessoa();
p.setNumRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");

console.log(p);

var a: Aluno;
a = new Aluno();
a.setNumRegistro(1235);
a.setNome("Isidro de Almeida Botelho");
a.setEmail("isi@isidrocorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Java Full Stack Galaxy Master");
a.setAnoMatricula(2019);
console.log(a);

var prof: Professor; 
prof = new Professor(); 
prof.setAreaFormacao("Tecnologia da informação"); 
prof.setEmail("proftop@gmail.com")
prof.setNome("Manuela Pires Callegari")
prof.setNumRegistro(2365); 
prof.setNumeroHoras (30)
prof.setTelefone("55 11 3200 9668"); 
prof.setvalorHora(500.50); 
console.log(prof);
