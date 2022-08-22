import { Component, Input, OnInit } from '@angular/core';
import { pickEtherModel } from '../models/pick-ether.model';
import { PickEtherService } from '../services/pick-ether.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent  implements OnInit{

@Input() pickEther! : pickEtherModel;  
// va permettre d'appeler caractéristique de lobjet exepmle: // this.pickEther.description = "Palmier de secours"; this.pickEther.like++;    //like++ limité à une fois

  //title : any = String;   //peut être déclaré de ces 2 manières
  //description!: string;  //*** */
  //createdDate!: Date;    //***ces info sont mtn récup dans app.component.ts */
  //like!: number;         //*** */
  //urlImg!: string;       //***
  txtButtonLike!: string;


  constructor(private pickEtherService: PickEtherService){}

  ngOnInit(): void {
    // this.title = "Fraisouw";
    // this.pickEther.description = "Palmier de secours";
    // this.createdDate = new Date(); // s'auto Datera à l'instant ou l'instance est généré
    // this.like = 8;
    // this.urlImg = "../../assets/img/01-fraisealombre.jpg";
    this.txtButtonLike = "Like it Jusqu'à la lune";

  }


  onLike(){  // event-bidind  method qui agi pour créer un événement le nom de la methode commence par 'on'
    //this.like++     // like type number Va s'incrémenter à chaque appel. tel quel non limité 
    if (this.txtButtonLike === "Like it Jusqu'à la lune"){
      this.pickEtherService.getLikePickById(this.pickEther.id, 'like');    //like++ limité à une fois
      this.txtButtonLike = "J'aime moins";  //puis je change sa valeur
    } else {
      this.pickEtherService.getLikePickById(this.pickEther.id, 'unlike');
      this.txtButtonLike =  "Like it Jusqu'à la lune";
    }
    
  }

}
