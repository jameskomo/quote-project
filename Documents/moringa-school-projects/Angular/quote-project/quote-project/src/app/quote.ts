export class Quote {
  public showDescription:boolean;
    constructor(public id:number, public author:string, public title:string, public description:string, public submittedBy:string,){
        this.showDescription=false

    }
       }
