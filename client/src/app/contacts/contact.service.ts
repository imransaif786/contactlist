import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }
}
