import { Component, OnInit } from '@angular/core';
import { pickEther } from './models/pick-ether.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myPicks : any = pickEther ;  
  // myPicks : any  ; fonctionne aussi

  ngOnInit(): void {
    this.myPicks = [{
      title: 'Fraisouw',
      description: "Palmier de secours",
      createdDate!: new Date(),
      like: 0,
      urlImg: "../../assets/img/01-fraisealombre.jpg",
      location: 'Cap D\'Agde'
    },

    // this.myPick = new pickEther(      
    //   'Fraisouw',
    //   "Palmier de secours",
    //   new Date(),
    //   0,
    //   "../../assets/img/01-fraisealombre.jpg")
 {
      title: 'cocktail-cucumber-rose-soda',
      description: "La pétillance qui pétille",
      createdDate!: new Date(),
      like: 0,
      urlImg: ".../../assets/img/02-cocktail-cucumber-rose-soda.gif",
      // localition: 'Los Angeles'
    },
      // this.myPick2 = new pickEther(
      //   'cocktail-cucumber-rose-soda',
      //   "La pétillance qui pétille",
      //   new Date(),
      //   0,
      //   "../../assets/img/02-cocktail-cucumber-rose-soda.gif"
      // )

     {
        title: '03-fraise-water-summer',
        description: "Rain de fraise",
        createdDate!: new Date(),
        like: 0,
        urlImg: "../../assets/img/03-fraise-water-summer.gif",
        location: 'Acapulco'
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
