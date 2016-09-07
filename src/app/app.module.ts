import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MdTabsModule } from '@angular2-material/tabs/tabs';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';

import { AppComponent }   from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
    imports:      [ 
        BrowserModule,
        RouterModule,
        HttpModule,
        FormsModule,
        MdSidenavModule,
        MdButtonModule,
        MdIconModule,
        MdTabsModule,
        MdToolbarModule,
        UserModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }