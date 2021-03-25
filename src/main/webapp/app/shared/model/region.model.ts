export interface IRegion {
  id?: string;
  regionName?: string;
}

export class Region implements IRegion {
  constructor(public id?: string, public regionName?: string) {}
}
