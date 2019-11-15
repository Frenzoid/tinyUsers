
import ITag from './ITag';
export default interface IUser {
  name: string;
  nickname: string;
  id: number;
  deleted: boolean;
  createdAt: number;
  tags: ITag[];
}