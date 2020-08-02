export interface IUser {
  id: number,
  name: string,
  email: string
}

export interface IList {
  id: number,
  name: string,
  userId: number
}

export interface ITask {
  id: number,
  name: string,
  isDone: boolean,
}