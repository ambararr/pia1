import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private auth : AuthService,
    private router: Router
  ) {}

  logout(){
    this.auth.signOut();
  }

  gotoPerfil(){
    this.router.navigate(['/perfil']);
  }
}
