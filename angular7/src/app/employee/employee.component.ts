import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../shared/user.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  newRule = {
    newDivision :'',
    type:'',
    time: [{ name: ''}],
    logoSrc:'',
    imgFile:''
  }
  constructor(private userService: UserService, private router: Router) {

   }
  

   
  ngOnInit() {
  }


 

  addMore() {
    this.newRule.time.push({ name: '' });
    // console.log(this.newRule)
  }

  closetime(index) {
    if (this.newRule.time.length > 1) {
      this.newRule.time.splice(index, 1);
    } else {
      // let snackBarRef = this.snackBar.open('* Atleast one item required!', '', {
      //   duration: 2000
      // });
      return false;
    }
  }
  addDivision(newRule){
    console.log(newRule.logoSrc);
      this.userService.postUser(newRule).subscribe(
        res => {
          // this.showSucessMessage = true;
          // setTimeout(() => this.showSucessMessage = false, 4000);
          // this.resetForm(form);
        },
        err => {
        //   if (err.status === 422) {
        //     this.serverErrorMessages = err.error.join('<br/>');
        //   }
        //   else
        //     this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      );
    
  }
  displayPhoto(fileInput){
    
    var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
    if (['gif','png','jpg','jpeg','pdf'].indexOf(ext) < 0) {
     // fileInput.target.files.remove(0);
      this.newRule.logoSrc = '';
      alert('Please select a valid image [ jpg | jpeg | gif | png | pdf ]');
      return false;
    }
    console.log(fileInput);
    this.newRule.imgFile = fileInput.target.files[0];
    
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
    
      reader.onload = ((e) => {
        this.newRule.logoSrc = e.target['result'];
      });
    
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
