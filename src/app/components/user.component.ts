import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  	<h1>Hello {{name}}</h1>
  	<p><b>Email:</b> {{email}}</p>
  	<p><b>Address:</b> {{address.street}}, {{address.city}}, {{address.state}}</p>
  	<div *ngIf="show">
  		<ul>
  			<li *ngFor="let item of items; let i = index">{{item}}
  				<button (click)="deleteItem()">delete</button>
  			</li>
  		</ul>
  	</div>
  	<button (click)="toggleItems()">{{toggle}} items</button>

  	<form (submit)="addItem(item.value)">
  		<label>Add new item</label>
  		<input type="text" #item />
  	</form>
  	`,
})
export class UserComponent  { 
	name: string;
	email: string;
	address: address;
	show: boolean;
	items: string[];
	toggle: string;

	constructor() {
		this.name = 'John Smith';
		this.email = 'socialmediawebster@gmail.com';
		this.address = {
			street: 'Bufalino',
			city: 'Brisbane',
			state: 'QLD'
		};
		this.show = false;
		this.items = ['apple', 'android', 'windows'];
		this.toggle = 'show';
	}

	toggleItems() {
		if(this.show == true) {
			this.toggle = 'show';
			this.show = false;
		}
		else {
			this.toggle = 'hide';
			this.show = true;
		}
	}

	addItem(item) {
		this.items.push(item);
	}

	deleteItem(i) {
		this.items.splice(i, 1);
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}
