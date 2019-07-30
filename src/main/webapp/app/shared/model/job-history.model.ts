import { Moment } from 'moment';
import { IJob } from 'app/shared/model/job.model';
import { IDepartment } from 'app/shared/model/department.model';
import { IEmployee } from 'app/shared/model/employee.model';

export const enum Language {
  FRENCH = 'FRENCH',
  ENGLISH = 'ENGLISH',
  SPANISH = 'SPANISH'
}

export interface IJobHistory {
  id?: string;
  startDate?: Moment;
  endDate?: Moment;
  language?: Language;
  job?: IJob;
  department?: IDepartment;
  employee?: IEmployee;
}

export class JobHistory implements IJobHistory {
  constructor(
    public id?: string,
    public startDate?: Moment,
    public endDate?: Moment,
    public language?: Language,
    public job?: IJob,
    public department?: IDepartment,
    public employee?: IEmployee
  ) {}
}
