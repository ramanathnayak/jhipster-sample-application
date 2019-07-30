import { IRegion } from 'app/shared/model/region.model';

export interface ICountry {
  id?: string;
  countryName?: string;
  region?: IRegion;
}

export class Country implements ICountry {
  constructor(public id?: string, public countryName?: string, public region?: IRegion) {}
}
