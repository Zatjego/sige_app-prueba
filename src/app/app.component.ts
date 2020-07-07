import { Component } from '@angular/core';
import { DataService } from './servicios/data.service';
import { Item_desglose } from './item_desglose.model';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'abc';

  items:Item_desglose[] = [];

  constructor(private dataSvc:DataService){  }
  ngOnInit(){        
    console.log("hola");
        this.dataSvc.getAll().subscribe(res => { 
          
          for(let item in res){
            this.items.push(res[item]);
          }       
          //console.log('Res ', res[1]);
        });
  }
}
