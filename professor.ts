import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa
{
    private valorHora: number; 
    private NumeroHoras: number;  
    private AreaFormacao: string;  


    public setvalorHora(_hora: number): void{
        this.valorHora = _hora;
    }
    public getvalorHora(): number{
        return this.valorHora;
    }

    public setNumeroHoras(_numeroh: number): void{
        this.NumeroHoras = _numeroh; 
    }

    public getNumeroHoras(): number{
        return this.NumeroHoras; 
    }

    public setAreaFormacao(_areaf: string): void{
        this.AreaFormacao = _areaf; 
    }
    public getAreaFormacao(): string{
        return this.AreaFormacao;
    }

}