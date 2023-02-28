export enum Status {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In progress',
  COMPLETED = 'Completed',
}

export interface Todo {
  id: number;
  description: string;
  status: Status;
}
