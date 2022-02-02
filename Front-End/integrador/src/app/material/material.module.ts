import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

let materialModules = [
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: [materialModules, CommonModule],
  exports: [materialModules],
})
export class MaterialModule {}
