import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastButton, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  userId:string | undefined;
  name:string | undefined;
  email:string | undefined;

  constructor(
    private auth:AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router:Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user=>{
      this.userId=user?.userId;
      this.name=user?.userName;
      this.email=user?.userEmail;
    })
  }

  async actualizarperfil(){
    const loading= await this.loadingCtrl.create({
      message: 'Actualizando...',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();
    
    this.afs.collection('user').doc(this.userId).set({
      'userName':this.name,
      'userEmail':this.email,
      'editdate': Date.now()
 
    },{merge:true})
    .then(()=>{
      loading.present();
      this.toast('Datos Actualizados','success');
      this.router.navigate(['/perfil']);
    })
    .catch(error=>{
      loading.dismiss();
      this.toast(error.message,'danger');
    })
  }


  async toast(message: string,status: string){
    const toast = await this.toastr.create({
      message: message,
      color : status,
      position : 'top',
      duration : 2000
    });
    toast.present();
  }

}
