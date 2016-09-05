import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule } from '@angular2-material/button';

@NgModule({
    declarations: [ AppComponent ],
    imports:      [ 
        BrowserModule,
        RouterModule,
        HttpModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }