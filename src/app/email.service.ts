import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from './email';

@Injectable()
export class EmailService {
  emails: Email[] = [];
  constructor(private httpClient: HttpClient) {}

  getEmail(): void {
    this.httpClient.get<Email[]>('/assets/email.json').subscribe(emails => {
      for (const email of emails) {
        this.emails.push(email);
      }
    });
  }
}
