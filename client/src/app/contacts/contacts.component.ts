import { Component, OnInit } from '@angular/core';

import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.styl']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[]
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      console.log(contacts);
      
      this.contacts = contacts;
    })
  }
}
