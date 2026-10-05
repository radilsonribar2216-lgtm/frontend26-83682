import { MedicoComponent } from './demo/pages/medico/medico.component';
import { CitaMedicaComponent } from './demo/pages/cita-medica/cita-medica.component';
import { FormulaMedicaComponent } from './demo/pages/formula-medica/formula-medica.component';
import { EspecializacionComponent } from './demo/pages/especializacion/especializacion.component';
import { HistoriaMedicaComponent } from './demo/pages/historia-medica/historia-medica.component';
import { AnotacionHistoriaComponent } from './demo/pages/anotacion-historia/anotacion-historia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { UsuarioComponent } from './demo/pages/usuario/usuario.component';
import { MascotaComponent } from './demo/pages/mascota/mascota.component';
import { ClienteComponent } from './demo/pages/cliente/cliente.component';
import { RazaComponent } from './demo/pages/raza/raza.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: AdminComponent,
    data: { title: 'Inicio' },
    children: [
      { path: 'usuarios', component: UsuarioComponent, data: { title: 'Usuarios' }},
      { path: 'mascotas', component: MascotaComponent, data: { title: 'Mascotas' }},
      { path: 'clientes', component: ClienteComponent, data: { title: 'Clientes' }},
      { path: 'razas', component: RazaComponent, data: { title: 'Razas' }},
      { path: 'medicos', component: MedicoComponent, data: { title: 'Médicos' }},
      { path: 'citas-medicas', component: CitaMedicaComponent, data: { title: 'Citas Médicas' }},
      { path: 'formulas-medicas', component: FormulaMedicaComponent, data: { title: 'Fórmulas Médicas' }},
      { path: 'especializaciones', component: EspecializacionComponent, data: { title: 'Especializaciones' }},
      { path: 'historias-medicas', component: HistoriaMedicaComponent, data: { title: 'Historias Médicas' }},
      { path: 'anotaciones-historia', component: AnotacionHistoriaComponent, data: { title: 'Anotaciones de Historia' }}
      /* Inserte nuevos menus aqui */
    ]
  },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
