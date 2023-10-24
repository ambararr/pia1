import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouteView } from '@ionic/angular/common/directives/navigation/stack-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user=>{
      this.user=user;
    })
  }

  editarperfil(){
    this.router.navigate(['editar/perfil'])
  }

}
