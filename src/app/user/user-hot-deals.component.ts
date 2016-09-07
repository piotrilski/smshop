import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserHotDealModel } from './user-hot-deal.model';

import { MdButtonModule } from '@angular2-material/button/button';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdTabsModule } from '@angular2-material/tabs/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'smshop-user-hot-deals',
  templateUrl: 'user-hot-deals.component.html',
  styleUrls: ['user-hot-deals.component.css']
})
export class UserHotDealsComponent implements OnInit {

    private localSubscriptions: any[];
	private userDealsCount: number = 5

	hotDeals: UserHotDealModel[];

    constructor(private userService: UserService) { 
		this.localSubscriptions = [];
	}

    ngOnInit() {
        this.localSubscriptions.push(this.initUserDeals());
    }

    initUserDeals() {
		return this.userService
			.getStartupDeals(this.userDealsCount)
			.subscribe(
				deals => this.hotDeals = deals,
				ex => { console.error(ex); })
	}

}
