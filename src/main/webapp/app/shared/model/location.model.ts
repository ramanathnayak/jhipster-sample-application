import { ICountry } from 'app/shared/model/country.model';

export interface ILocation {
  id?: string;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  stateProvince?: string;
  country?: ICountry;
}

export class Location implements ILocation {
  constructor(
    public id?: string,
    public streetAddress?: string,
    public postalCode?: string,
    public city?: string,
    public stateProvince?: string,
    public country?: ICountry
  ) {}
}
