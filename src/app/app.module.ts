import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { OrganoComponent } from './organo/organo.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { FooterComponent } from './footer/footer.component';
import { MisionvisionComponent } from './institucional/misionvision/misionvision.component';
import { ObjetivosComponent } from './institucional/objetivos/objetivos.component';
import { UbicacionComponent } from './institucional/ubicacion/ubicacion.component';
import { HistoriaComponent } from './institucional/historia/historia.component';
import { CreacionComponent } from './institucional/creacion/creacion.component';
import { EstructuraComponent } from './institucional/estructura/estructura.component';
import { MarcolegalComponent } from './institucional/marcolegal/marcolegal.component';
import { RedsaludComponent } from './directorio/redsalud/redsalud.component';
import { AseguramientoComponent } from './organo/aseguramiento/aseguramiento.component';
import { DocumentosgestionComponent } from './transparencia/documentosgestion/documentosgestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InstitucionalComponent,
    DirectorioComponent,
    OrganoComponent,
    TransparenciaComponent,
    FooterComponent,
    MisionvisionComponent,
    ObjetivosComponent,
    UbicacionComponent,
    HistoriaComponent,
    CreacionComponent,
    EstructuraComponent,
    MarcolegalComponent,
    RedsaludComponent,
    AseguramientoComponent,
    DocumentosgestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
