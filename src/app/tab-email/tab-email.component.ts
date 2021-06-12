import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-tab-email',
  templateUrl: './tab-email.component.html',
  styleUrls: ['./tab-email.component.css']
})
export class TabEmailComponent implements OnInit {
  dataSource: Email[] = [
    {
      status: 'low',
      creation_date: '08/10/2017 18:00',
      address: 'titi@test.com',
      type: 'Mail',
      last_connexion: '10/06/2021 15:00',
      localisation: 'Bretagne',
      pwned: false
    },
    {
      status: 'medium',
      creation_date: '19/08/2019 18:00',
      address: 'tutu@test.com',
      type: 'Mail',
      last_connexion: '19/04/2021 15:00',
      localisation: 'Pays-Bas',
      pwned: true
    },
    {
      status: 'high',
      creation_date: '08/10/2017 18:00',
      address: 'tata@test.com',
      type: 'Alias',
      last_connexion: '19/04/2021 15:00',
      localisation: 'Mexico',
      pwned: false
    },
    {
      status: 'low',
      creation_date: '08/10/2017 18:00',
      address: 'toto@test.com',
      type: 'Alias',
      last_connexion: '10/06/2021 15:00',
      localisation: 'Bretagne',
      pwned: false
    }
  ];
  displayedColumns = [
    'status',
    'creation_date',
    'address',
    'type',
    'last_connexion',
    'localisation',
    'pwned'
  ];

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    //this.emailService.getEmail();
    //this.dataSource = this.emailService.emails;
  }
}
