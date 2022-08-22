import { Component, OnInit } from '@angular/core';
import { pickEtherModel } from '../models/pick-ether.model';
import { PickEtherService } from '../services/pick-ether.service';

@Component({
  selector: 'app-pick-ether-list',
  templateUrl: './pick-ether-list.component.html',
  styleUrls: ['./pick-ether-list.component.scss']
})
export class PickEtherListComponent implements OnInit {

  constructor(private pickEtherService: PickEtherService) { }

  myPicks : any = pickEtherModel ;  
  // myPicks : any  ; fonctionne aussi

  ngOnInit(): void {
    this.myPicks = this.pickEtherService.myPicks;

  


}
}