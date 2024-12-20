import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventHtmlComponent } from './components/event-html/event-html.component';
import { PadreComponent } from './templates/padre/padre.component';
import { Hijo1Component } from './components/hijo1/hijo1.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ConfirmacionMensajeComponent } from './components/confirmacion-mensaje/confirmacion-mensaje.component';
import { MinijuegoPadreComponent } from './templates/minijuego-padre/minijuego-padre.component';
import { MinijuegoHijoComponent } from './components/minijuego-hijo/minijuego-hijo.component';
import { BotonComponent } from './components/boton/boton.component';
import { TemplateComponent } from './templates/template/template.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { HijoEmiteComponent } from './components/hijo-emite/hijo-emite.component';
import { PadreRecibeComponent } from './templates/padre-recibe/padre-recibe.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TemplateformComponent } from './templates/templateform/templateform.component';
import { HijoviewComponent } from './components/hijoview/hijoview.component';
import { PadreviewComponent } from './templates/padreview/padreview.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHtmlComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    TextareaComponent,
    ConfirmacionMensajeComponent,
    MinijuegoPadreComponent,
    MinijuegoHijoComponent,
    BotonComponent,
    TemplateComponent,
    ImagenComponent,
    CardProductoComponent,
    HijoEmiteComponent,
    PadreRecibeComponent,
    FormularioComponent,
    TemplateformComponent,
    HijoviewComponent,
    PadreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
