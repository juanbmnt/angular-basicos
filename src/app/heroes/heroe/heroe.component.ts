import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Ironman';
    edad: number = 56;

    
    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }
    

    obtenerNombre(): string{
        return `${ this.nombre} - ${ this.edad}` ;
    }
    cambiarNombre():void{
        if(this.nombre=='Ironman'){
            this.nombre = 'Spiderman';
        }
        else{
            this.nombre = 'Ironman';
        }
        
    }
    cambiaredad():void{
        if (this.edad==56) {
            this.edad = 24;    
        }
        else{this.edad=56;}
    }
}