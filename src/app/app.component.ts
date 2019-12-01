import { Component } from '@angular/core';
import { LoginServiceService } from './services/activServics/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projecAngulart1';

  constructor(private LoginServiceService:LoginServiceService){
    console.log('AppComponent stert');
    
  }
}
