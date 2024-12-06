import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { LayoutComponent } from './layout/layout.component';
//import { AppLayoutComponent } from './layout/app.layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CategoriaService } from './inventario/services/categoria.service';
import { InventarioModule } from './inventario/inventario.module';
import { TableModule } from 'primeng/table';
import { ProductoService } from './inventario/services/producto.service';


@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,
    InventarioModule
   
  ],
  providers:[
    CategoriaService,
    ProductoService
  ]
})
export class AdminModule { }