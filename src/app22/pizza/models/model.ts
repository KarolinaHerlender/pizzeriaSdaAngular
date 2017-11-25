export abstract class Model {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }
    get Id(): string {
        return this.id;
    }
    set Id(id: string) {
        this.id = id;
    }
}

