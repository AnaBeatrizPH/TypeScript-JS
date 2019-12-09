function funcao (...parametros: string[]) : string 
{
    let txt:string =" ";
    for(let i=0; i<parametros.length;i++)
    {
        txt+=`<div id="id${i+1}">${parametros[i]} </div>\n`;
    }
    return txt; 
}

console.log(funcao("primeiro", "segundo", "terceiro"));