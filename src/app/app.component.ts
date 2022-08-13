import { Component, OnInit } from '@angular/core';
import { pickEther } from './models/pick-ether.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myPick : any = pickEther ;
  myPick2!: pickEther;
  myPick3!: pickEther;

  ngOnInit(): void {
    this.myPick = new pickEther(
      'Fraisouw',
      "Palmier de secours",
      new Date(),
      0,
      "../../assets/img/01-fraisealombre.jpg"
    )

    this.myPick2 = new pickEther(
      'cocktail-cucumber-rose-soda',
      "La pétillance qui pétille",
      new Date(),
      0,
      "../../assets/img/02-cocktail-cucumber-rose-soda.gif"
    )


    this.myPick3 = new pickEther(
      '03-fraise-water-summer',
      "Rain de fraise",
      new Date(),
      0,
      "../../assets/img/03-fraise-water-summer.gif"
    )


  }
}
