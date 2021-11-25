<h1>{{title}}</h1>

<form>
    Numero 1: <input type="number" [(ngModel)] ="numero1" name="numero1"><br/><br/>
    Numero 2: <input type="number" [(ngModel)] ="numero2" name="numero2"><br/><br/>

    <input type="submit" value="Sumar"  (click)="sumar()">
    <input type="submit" value="Restar"  (click)="restar()">

</form>


<p>Resultado: {{resultado}}</p>


<h1 style="text-align: center;">Registro de Usuarios</h1>
<form>  
  <input type="text" name="nombre" [(ngModel)] ="nombre" name="nombre" ><br>
  <input type="text" name="apellido" [(ngModel)] ="apellido" name="apellido" ><br>
  <input type="submit" value="Registrar" (click)="RegistrarUsuario()">
</form>

<p  *ngIf="registrado;else sinregistrar"> {{mensaje}} </p>


<ng-template #sinregistrar>
  <p>Nadie se ha registrado</p>
</ng-template>


<ul>
  <li *ngFor="let entrada of entradas"> {{entrada.titulo}}</li>
</ul>

export class AppComponent {
  title = 'Mini Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;
  mensaje:string="";
  nombre:string="";
  apellido:string="";
  registrado:boolean=false;
  entradas: Array<any>=[ ]; 
  titulo="Registro de usuarios";

  constructor(){
    this.entradas=[
      {titulo:"Redes Neuronales"},
      {titulo:"Big data"},
      {titulo:"Deep Learning"},
      {titulo:"Machine Learning"},
      {titulo:"C++"},
    ]
  }

sumar():void {
  this.resultado=this.numero1+this.numero2;

}

restar():void {
  this.resultado=this.numero1-this.numero2;

}

RegistrarUsuario():void{
  this.registrado=true;
 this.mensaje="el usuario"+this.nombre+this.apellido+"ha sudo registrado con exito";
}



