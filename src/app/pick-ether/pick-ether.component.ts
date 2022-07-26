import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-ether',
  templateUrl: './pick-ether.component.html',
  styleUrls: ['./pick-ether.component.scss']
})
export class PickEtherComponent  implements OnInit{

  title : any = String;   //peut être déclaré de ces 2 manières
  description!: string;
  createdDate!: Date;
  like!: number;
  urlImg!: string;
  txtButtonLike!: string;


  // constructor() { }

  ngOnInit(): void {
    this.title = "Fraisou";
    this.description = "Palmier de secours";
    this.createdDate = new Date(); // s'auto Datera à l'instant ou l'instance est généré
    this.like = 8;
    this.urlImg = "../../assets/img/01-fraisealombre.jpg";
    this.txtButtonLike = "Like it Jusqu'à la lune";

  }


  onLike(){  // event-bidind  method qui agi pour créer un événement le nom de la methode commence par 'on'
    //this.like++     // like type number Va s'incrémenter à chaque appel. tel quel non limité 
    if (this.txtButtonLike === "Like it Jusqu'à la lune"){
      this.like++;    //like limité à une fois
      this.txtButtonLike = "J'aime moins";  //puis je change sa valeur
    } else {
      this.like--;
      this.txtButtonLike =  "Like it Jusqu'à la lune";
    }
    
  }

}
