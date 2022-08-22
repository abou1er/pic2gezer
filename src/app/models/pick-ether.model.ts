export class pickEtherModel{
    id!: number;
    title : any = String;   //peut être déclaré de ces 2 manières
    description!: string;
    createdDate!: Date;
    like!: number;
    urlImg!: string;
    location?: string;
    goutte?: number;
    price?: number;
    
//     constructor(title:string, description: string, createdDate: Date, like:number, urlImg:string){
//         this.title = title;
//         this.description = description;
//         this.urlImg = urlImg;
//         this.createdDate = createdDate;
//         this.like = like;
//     }
  
// }

// export class pickEther{
//                                     //il est possible de ne pas déclarer comme fait dans l'exemple en précisant public devant
//     constructor(public title:string, 
//                 public description: string, 
//                 public createdDate: Date, 
//                 public like: number, 
//                 public urlImg: string,
//                 public localition?: string,) {  //? permet de 
        
//     }
  
}