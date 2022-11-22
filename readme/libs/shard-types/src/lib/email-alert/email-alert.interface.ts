export interface EmailAlertInterface {
  send (emails:string[], title:string, blogs?:string[]):Promise<void>;
}
