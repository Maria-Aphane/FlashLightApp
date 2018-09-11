import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Flashlight} from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isOn:boolean;
  status:string;

  constructor(public navCtrl: NavController,private platForm:Platform,private flash:Flashlight) {

  this.platForm.ready().then(()=>{
    this.updateFlashlightStatus();
  })

  }

  switchOn()
  {
    this.flash.switchOn();
    this.updateFlashlightStatus();
  }
  switchOff()
  {
    this.flash.switchOff();
    this.updateFlashlightStatus();
  }
  toggle(){

    this.flash.toggle();
    this.updateFlashlightStatus();
  }

  updateFlashlightStatus(){

    this.isOn = this.flash.isSwitchedOn();
  }
  showstatus(){
    if( this.isOn==true){
      this.status='on'
    }
    else{
      this.status='Off'
    
    }

  }

}
