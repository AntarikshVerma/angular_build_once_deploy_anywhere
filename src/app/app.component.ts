import { environment } from './../environments/environment.prod';
import { Component } from '@angular/core';
import { EnvService } from './services/env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuildOnceDeployAnywhere';

  constructor(private envService: EnvService) {

  }

  AppType: string = this.envService.projectName;
}
