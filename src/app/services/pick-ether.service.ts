import { Injectable } from '@angular/core' ;
import { pickEtherModel } from '../models/pick-ether.model';

@Injectable({
    providedIn: 'root'
})

export class PickEtherService{
    mypicks: any = pickEtherModel;

    myPicks = [{

        id:1,
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
        id:2,
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
          id:3,
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

  
//   console.log(this.myPicks);
getAllPicks(){
    return this.myPicks;
  }


  getPickById(myPickId: number): pickEtherModel {
    const pick = this.myPicks.find(pick => pick.id === myPickId);

    if (!pick){
        throw new Error("Aucune pick correspondant à cette id!");
        
    }else{
        return pick   
    }
 } 

 getLikePickById(myPickId: number, likeType: 'like' | 'unlike'): void {
    const pick = this.getPickById(myPickId); //utilise la methode getbyid
    likeType === 'like' ? pick.like++ : pick.like--;  //va ajoute +1 ou -1
 }                                                    //likeType: 'like' | 'unlike'
                                                     //likeType === 'like' ? pick.like++ : pick.like--;
    }
  
