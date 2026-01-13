import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskListComponent } from './tasks/task-list.component';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly userService = inject(UserService);

  currentUser: string | null = 'Guest';
  isLoggedIn = false;

  constructor(){
    this.isLoggedIn = this.userService.userLoggedIn();
    this.currentUser = this.isLoggedIn ? this.userService.currentUserName() : 'Guest';
  }
  
}
