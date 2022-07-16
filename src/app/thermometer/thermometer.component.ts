import {Component} from '@angular/core';
import {MatSliderChange, MatSliderModule} from "@angular/material/slider";
import {MatRadioChange} from "@angular/material/radio";

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent  {

  ADULTS = "Adults";
  CHILDREN = "Children";
  BABIES = "Babies";

  temp: number   = 98.6;
  type: string = this.ADULTS;
  advice: string = this.getAdvice(this.type, this.temp);


  changeValue(event: MatSliderChange) {
    if (typeof event.value === "number") {
      this.temp = event.value;
    }
    this.advice = this.getAdvice(this.type, this.temp);
  }

  radioChange(value: MatRadioChange) {
    this.type = value.value;
    this.advice = this.getAdvice(this.type, this.temp);
  }

  getAdvice(ageCategory: string, theTemp: number): string{
    if(theTemp <= 95.0  ){
      return "Hypothermia SEEK CARE";
    }
    else if ( theTemp >= 95.1 && theTemp <= 96.9 ){
      if(ageCategory == this.BABIES ) {
        return "Low SEEK CARE";
      }
      else {
        return "Low but possibly normal";
      }
    }
    else if (theTemp >= 97 && theTemp <= 98.6) {
      return "Normal";
    }
    else if ( theTemp >= 98.6 && theTemp <= 100.4 ){
      if(ageCategory == this.BABIES ) {
        return "Low grade fever";
      }
      else {
        return "Normal or low grade fever";
      }
    }
    else if ( theTemp >= 100.4 && theTemp <= 103.0 ){
      if(ageCategory == this.BABIES ) {
        return "Fever SEEK CARE";
      }
      else {
        return "Fever";
      }
    }
    else if ( theTemp >= 103.0 ){
      if(ageCategory == this.BABIES ) {
        return "High Fever SEEK CARE";
      }
      else {
        return "High Fever CALL YOUR DOCTOR";
      }
    }
    /*    if (this.type === "Adults") {
          this.advice = "Adults and temp";
        } else if (this.type === "Children") {
          this.advice = "Children and temp";
        } else if (this.type === "Babies") {
          this.advice = "Babies and temp";
        }*/

    return "error";
  }
}
