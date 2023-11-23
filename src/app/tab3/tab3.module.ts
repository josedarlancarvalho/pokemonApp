
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { PokeAPIService } from '../../app/services/poke-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    HttpClientModule, 
  ],
  declarations: [Tab3Page],
  providers: [PokeAPIService],
})
export class Tab3PageModule {}