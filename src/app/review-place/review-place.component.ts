import { Component, OnInit } from '@angular/core';
import {SebmGoogleMap} from 'angular2-google-maps/core';

@Component({
  selector: 'app-review-place',
    host: {      class:'review-place'
    },
  templateUrl: './review-place.component.html',
  styleUrls: ['./review-place.component.css']
})
export class ReviewPlaceComponent implements OnInit {

  lat: number = 32.0662;
  lng: number = 34.7778;
  placelabel: string="the place name";
  placetitle: string= "the best place :)";
  placeicon: string="../../Content/Knight_dark.png";
  placedetails: string="details... bla bla bla";
  constructor() { }

  ngOnInit() {
    
  }



}
