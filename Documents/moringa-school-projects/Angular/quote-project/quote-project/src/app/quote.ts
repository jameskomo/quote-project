export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public author: string, public title: string, public quoteDescription, public submissionDate: Date) {
    this.showDescription = false;

  }
}
