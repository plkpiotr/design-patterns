export class King {
  private static instance: King;

  private constructor() {}

  public static getInstance(): King {
    if (King.instance === undefined) {
      King.instance = new King();
    }
    return King.instance;
  }

  public showKingName(): string {
    return 'Louis XX';
  }
}
