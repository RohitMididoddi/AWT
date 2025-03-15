import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Students';
  students=[

    {
      name :"Rohit",
      age :20,
      branch:"IT"
    },
    
    {
      name :"Sanjay",
      age :20,
      branch:"ECE"
    },
    
    {
      name :"Rohan",
      age :20,
      branch:"CIVIL"
    },
    {
      name :"RVS",
      age :21,
      branch:"CSE"
    },
    {
      name :"Nishanth",
      age :22,
      branch:"EEE"
    },
    {
      name :"ABCDE",
      age :23,
      branch:"IT"
    }
  ]
}