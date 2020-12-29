export class Application {
  private static instance: Application;
  private userData: any;

  public static getInstance(): Application {
    if (!Application.instance) {
      Application.instance = new Application();
    }
    return Application.instance;
  }

  public get UserData() {
    return this.userData;
  }

  public set UserData(userData: any) {
    this.userData = userData;
  }
}
