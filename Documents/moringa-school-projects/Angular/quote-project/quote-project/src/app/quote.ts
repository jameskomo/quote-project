export class Quote {
  public showDescription:boolean;
         constructor(
           public title: string,
           public description: string,
           public author: string,
           public submittedBy: string
         ) {
           this.showDescription=false
         }
       }
