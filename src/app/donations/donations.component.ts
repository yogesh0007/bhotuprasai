import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {DataService}  from '../services/data.service';


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
    alertBox: boolean = false;
    constructor(private _http: Http, private dataService: DataService){}
    onAddingDonator(donator){
        console.log(donator);
        this.dataService.onDonationSave(donator).subscribe(res => {
            console.log("res " +res);
            this.alertBox = true;
            if(res){
                alert("The list has been saved.");
            }
        });
    }
}