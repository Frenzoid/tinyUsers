export default interface IResponseModel {
  data: any;
  errors: { critical: boolean, messages: string[] };
  timestamp: Date;
}