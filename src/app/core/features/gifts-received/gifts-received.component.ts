import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, } from 'ngx-lottie';

@Component({
  selector: 'app-gifts-received',
  templateUrl: './gifts-received.component.html',
  styleUrls: ['./gifts-received.component.scss']
})
export class GiftsReceivedComponent implements OnInit {


  secondFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  isLinear: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  options: AnimationOptions = {
    
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
