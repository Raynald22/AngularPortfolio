import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: 'Contact Me ☎️',
    subtitle:
      'Discuss a project or just want to say hi? My Inbox is open for all.',
    number: '+62-87877367849',
    email_address: 'reynaldifkr@gmail.com',
  };
  constructor() {}

  ngOnInit(): void {}
}
