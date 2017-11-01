import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MesasPage } from '../mesas/mesas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab1Root = MesasPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
