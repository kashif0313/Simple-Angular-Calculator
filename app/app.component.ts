import { Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  operatorValue:string=""; 
  secondValue:string="";
  tempValue:any="";
  afterOpr:string="";
  leftVal:string="";
  leftValNum!:number;
  rightValNum!:number;
  result:any;
  calAgainFlag: number=0;
  parentFunction(data:string){
    if(this.secondValue=="")
    {
      this.secondValue = data;
    this.tempValue = this.secondValue;
    //alert("storedValue1 = "+this.secondValue);
    }
    else if(data!=this.secondValue)
    {
      this.secondValue = data;
      this.tempValue=this.tempValue+this.secondValue;
      //alert("storedValue = "+this.tempValue1);
    }
    else
    {
      this.tempValue=this.tempValue+this.secondValue;
   }
}
operatorFunction(operatorData:string){
  if(this.leftVal=="")
      {
        this.leftVal=this.tempValue;
        this.tempValue="";
      }
  this.operatorValue=operatorData;
  //this.tempValue=this.tempValue+operatorData;  
  if(this.calAgainFlag==1)
  {
    this.leftVal=this.tempValue;
    this.calAgainFlag=0;
  }
}
resultFunction(){
  if(this.afterOpr=="")
  {
    this.afterOpr=this.tempValue;
  }
  this.leftValNum=Number(this.leftVal);
  this.rightValNum=Number(this.afterOpr);
  //alert("left="+this.leftValNum+"  right="+this.rightValNum);
  if(this.operatorValue=="+")
  {
    this.tempValue=this.leftValNum+this.rightValNum;
    this.calAgain();
  }
  else if(this.operatorValue=="-")
  {
    this.tempValue=this.leftValNum-this.rightValNum;
    this.calAgain();
  }
  else if(this.operatorValue=="*")
  {
    this.tempValue=this.leftValNum*this.rightValNum;
    this.calAgain();
  }
  else if(this.operatorValue=="/")
  {
    this.tempValue=this.leftValNum/this.rightValNum;
    this.calAgain();
  }
  
}
calAgain()
{  this.afterOpr="";
this.secondValue="";
this.operatorValue="";
this.calAgainFlag=1;
}
clearInput()
{
    this.tempValue="clear";
    this.afterOpr="";
    this.secondValue="";
    this.operatorValue="";
    this.leftVal="";
    this.calAgainFlag=0;
}
}
