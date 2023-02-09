import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent:number=1

  properties!: IPropertyBase[];;
  constructor(private housing: HousingService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent =2
    }
    this.housing
      .getAllProperties(this.SellRent)
      .subscribe((data) => {
        this.properties = data;
        console.log(data);
      },error =>{
          console.log(error)
      });
  }
}
