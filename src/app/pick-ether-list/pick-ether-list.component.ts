import { Component, OnInit } from '@angular/core';
import { pickEtherModel } from '../models/pick-ether.model';

@Component({
  selector: 'app-pick-ether-list',
  templateUrl: './pick-ether-list.component.html',
  styleUrls: ['./pick-ether-list.component.scss']
})
export class PickEtherListComponent implements OnInit {

  constructor() { }

  myPicks : any = pickEtherModel ;  
  // myPicks : any  ; fonctionne aussi

  ngOnInit(): void {
    this.myPicks = [{
      title: 'Fraisouw',
      description: "Palmier de secours",
      createdDate!: new Date(),
      like: 240,
      urlImg: "../../assets/img/01-fraisealombre.jpg",
      location: 'Cap D\'Agde',
      price: 450.67
    },

    // this.myPick = new pickEther(      
    //   'Fraisouw',
    //   "Palmier de secours",
    //   new Date(),
    //   0,
    //   "../../assets/img/01-fraisealombre.jpg")
 {
      title: 'cocktail cucumber rose soda',
      description: "La pétillance qui pétille",
      createdDate!: new Date(),
      like: 48,
      urlImg: ".../../assets/img/02-cocktail-cucumber-rose-soda.gif",
      // localition: 'Los Angeles'
      price: 236.28
    },
      // this.myPick2 = new pickEther(
      //   'cocktail-cucumber-rose-soda',
      //   "La pétillance qui pétille",
      //   new Date(),
      //   0,
      //   "../../assets/img/02-cocktail-cucumber-rose-soda.gif"
      // )

     {
        title: '03 fraise water summer',
        description: "Rain de fraise",
        createdDate!: new Date(),
        like: 15,
        urlImg: "../../assets/img/03-fraise-water-summer.gif",
        location: 'Acapulco',
        goutte: 651566285,
        price:785.78
      }

    ] 
  // this.myPick3 = new pickEther(
  //   '03-fraise-water-summer',
  //   "Rain de fraise",
  //   new Date(),
  //   0,
  //   "../../assets/img/03-fraise-water-summer.gif"
  // )


console.log(this.myPicks);


  }


}
