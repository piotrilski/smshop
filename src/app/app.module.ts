import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports:      [ 
        BrowserModule,
        RouterModule,
        HttpModule,
        FormsModule 
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }