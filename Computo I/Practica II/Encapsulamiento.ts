class Animales{ 
    private nombre: string; //Solo se puede acceder a este atributo desde la misma clase 
    public raza: string; //Se puede acceder a este atributo desde cualquier parte del codigo 
    protected edad: number; //Se puede acceder a este atributo desde la misma clase y desde las clases hijas 
    constructor(
        nombre: string, 
        raza: string, 
        edad: number)
        {
            this.nombre = nombre; 
            this.raza = raza; 
            this.edad = edad; 
        } 

    //*METODOS 
    showInfo(){
        console.log(`El nombre del animal es: ${this.nombre} pertenece a la raza: ${this.raza} y tiene ${this.edad} años`);
    }

    //GETTERS 
    getNombre(): string{
        return this.nombre; 
    } 

    getRaza(): string{ 
    return this.raza; 
    } 

    getEdad(): number{ 
    return this.edad; 
    } 

    //SETTERS 
    setNombre(nombre: string): void{
    this.nombre = nombre; 
    } 

    setRaza(raza: string): void{ 
    this.raza = raza; 
    } 

    setEdad(edad: number): void{ 
    this.edad = edad; 
    } 
}

let animal1 = new Animales ('Firulais', 'Pastor Aleman', 5); 
animal1.showInfo(); 
animal1.setNombre('Rex'); 
animal1.setRaza('Pitbull'); 
animal1.setEdad(3); 
console.log('==========================')
animal1.showInfo();