export class Carro // export para tornar a classe pública e usá-la em outros arquivos
{
     private placa: string;
     private cor:   string;
     private modelo:string;
     private ano: number;
     private ligado: boolean;
   
    public getPlaca() : string
    {
        return this.placa; 
    }

   public setPlaca(_placa : string) : void
   {
        this.placa = _placa;
   }

    public getCor(): string
    {
        return this.cor; 
    }

    public setCor(_cor : string) : void
    {
        this.cor = _cor; 
    }

    public getModelo(): string
    {
        return this.modelo;
    }

    public setModelo(_modelo : string) : void
    {
        this.modelo = _modelo;
    }

    public getAno(): number
    {
        return this.ano; 
    }

    public setAno(_ano : number) : void
    {
        if(_ano<1900 || _ano >2020)
        {
            console.log("Não há registro")
        }
        else{
        this.ano = _ano; 
        }
    }

    public getLigado(): boolean 
    {
        return this.ligado
    }

    public setLigado(_ligado : boolean) : void
    {
        this.ligado = _ligado;
    }





   public andar(): void
    {
        if(this.ligado==true){
        console.log("O carro "+ this.modelo + ""+ this.placa +" do ano" + this.ano + "está andando...");} //operador this é de pertencimento(membresia}
        else 
        {
            console.log("É preciso ligar o carro primeiro");
        }
    }

    public parar():void
    {
        console.log(`O carro ${this.modelo} ${this.placa} do ano ${this.ano} acabou de parar`)
    }

   public ligar(): void
        {   this.ligado = true;
            
            console.log("O carro está ligado" );
         }

    public desligar(): void
    {
        this.ligado = false;
        console.log("O carro está desligado" );
    }

}