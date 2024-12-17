import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventHtmlComponent } from './event-html/event-html.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ConfirmacionMensajeComponent } from './confirmacion-mensaje/confirmacion-mensaje.component';
import { MinijuegoPadreComponent } from './minijuego-padre/minijuego-padre.component';
import { MinijuegoHijoComponent } from './minijuego-hijo/minijuego-hijo.component';
import { BotonComponent } from './boton/boton.component';
import { TemplateComponent } from './template/template.component';
import { ImagenComponent } from './imagen/imagen.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { HijoEmiteComponent } from './hijo-emite/hijo-emite.component';
import { PadreRecibeComponent } from './padre-recibe/padre-recibe.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TemplateformComponent } from './templateform/templateform.component';

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
    TemplateformComponent
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
