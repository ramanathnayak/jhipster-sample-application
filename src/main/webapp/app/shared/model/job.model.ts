import { IEmployee } from 'app/shared/model/employee.model';
import { ITask } from 'app/shared/model/task.model';

export interface IJob {
  id?: string;
  jobTitle?: string;
  minSalary?: number;
  maxSalary?: number;
  employee?: IEmployee;
  tasks?: ITask[];
}

export class Job implements IJob {
  constructor(
    public id?: string,
    public jobTitle?: string,
    public minSalary?: number,
    public maxSalary?: number,
    public employee?: IEmployee,
    public tasks?: ITask[]
  ) {}
}
