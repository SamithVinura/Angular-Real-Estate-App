import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('form') addProperty!: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(addProperty:NgForm){
    console.log(addProperty)
  }
}
