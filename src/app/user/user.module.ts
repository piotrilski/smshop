import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserHotDealsComponent } from './user-hot-deals.component';
import { UserLoginComponent } from './user-login.component';
import { UserService } from './user.service';

@NgModule({
    declarations: [ UserComponent, UserLoginComponent, UserHotDealsComponent ],
    providers: [ UserService ],
    imports: [ CommonModule ],
    exports: [ UserComponent, UserLoginComponent, UserHotDealsComponent ]
})
export class UserModule { }