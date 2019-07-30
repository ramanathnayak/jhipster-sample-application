import { IJob } from 'app/shared/model/job.model';

export interface ITask {
  id?: string;
  title?: string;
  description?: string;
  jobs?: IJob[];
}

export class Task implements ITask {
  constructor(public id?: string, public title?: string, public description?: string, public jobs?: IJob[]) {}
}
