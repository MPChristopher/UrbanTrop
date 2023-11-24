import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage {

  constructor(private navCtrl: NavController) {}
  RedireccionHome() {
    this.navCtrl.navigateForward('home');
  }

}
