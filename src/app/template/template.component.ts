// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-template',
//   templateUrl: './template.component.html',
//   styleUrls: ['./template.component.scss']
// })
// export class TemplateComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component,  OnInit, Output,EventEmitter }  from '@angular/core';
import { FormtService } from '../Form-t.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class  TemplateComponent implements OnInit {
  title = 'Template Driven Form';
  data:any={};
  constructor(private service:FormtService) {}
  @Output() infot=new EventEmitter<any>();
  
  er:boolean=false;
  array:any=[];
  array1=[];
 
  onSubmit(f:any){
    //alert(JSON.stringify(this.data) )
    this.array.push(this.data);
    //console.log(this.array)
    this.data={}
    f.reset();
  
  }
  
  onchange(event: any){
    //console.log(event);
  
    if(this.data.email===this.data.Cmail){
      this.er=true;
    }
    else
      this.er=false;
  }
  ngOnInit(){
    this.service.getformt().subscribe(data=>{
      this.array=data
    });

  }
  conform(value:any){
    this.infot.emit(value);
    //console.log(value,"yaaaa")
  }
  

  


}

