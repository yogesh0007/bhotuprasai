import { Component } from '@angular/core';

@Component({
    selector: 'abc-donations',
    templateUrl: './donations.component.html'
    //template: 'Hello'
})

export class DonationsComponent{
    isThereAnyDonations: boolean = false;
    firstName: string;
    lastName: string;
    donations: string;

    onAddingDonator(donator){
        console.log(donator);
        
    }
}