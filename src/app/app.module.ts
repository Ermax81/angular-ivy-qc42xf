import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabEmailComponent } from './tab-email/tab-email.component';
import { EmailService } from './email.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MaterialModule],
  declarations: [AppComponent, HelloComponent, TabEmailComponent],
  bootstrap: [AppComponent],
  providers: [EmailService]
})
export class AppModule {}
