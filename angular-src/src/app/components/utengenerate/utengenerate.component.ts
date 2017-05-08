import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-utengenerate',
  templateUrl: './utengenerate.component.html',
  styleUrls: ['./utengenerate.component.css']
})
export class UtengenerateComponent implements OnInit {

  constructor(private router: Router) { 
  	
  }

  ngOnInit() {
  	
  }

  uten = "<--Generate";

  map = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  OnGenerate(){
  	this.uten = this.map[Math.floor(Math.random()*26)].toString() + this.map[Math.floor(Math.random()*26)].toString() + Math.floor(Math.random()*9) + Math.floor(Math.random()*9) + Math.floor(Math.random()*9)+ Math.floor(Math.random()*9)+this.map[Math.floor(Math.random()*26)].toString()+this.map[Math.floor(Math.random()*26)].toString();
  }

	

}
