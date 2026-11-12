import {Service} from '@angular/core';
import {HousingLocationInfo} from './housinglocation';

// Service that loads housing location data from the json-server backend
@Service()
export class HousingService {
  url = 'http://localhost:3000/locations';

  // Fetches all housing locations from the server
  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  // Fetches a single housing location by id
  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const locationJson = await data.json();
    return locationJson ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}
