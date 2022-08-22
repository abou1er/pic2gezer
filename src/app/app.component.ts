import { Component, OnInit } from '@angular/core';
import { pickEtherModel } from './models/pick-ether.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myPicks : any = pickEtherModel ;  
  // myPicks : any  ; fonctionne aussi

  ngOnInit(): void {
  




}
}
