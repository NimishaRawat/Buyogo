import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockOrganizations = ['Org1', 'Org2', 'Org3'];

  getOrganizations() {
    return of(this.mockOrganizations);
  }
}
