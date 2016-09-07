import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserHotDealModel } from './user-hot-deal.model';

@Component({
  moduleId: module.id,
  selector: 'smshop-user-hot-deals',
  templateUrl: 'user-hot-deals.component.html',
  styleUrls: ['user-hot-deals.component.css'],
  providers: [ 'UserService' ]
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
