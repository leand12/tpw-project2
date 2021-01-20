import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '@core/services';
import {global} from '@core/utils/global';
import {UserProfileReadModel} from '@core/models/user-profile.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService]
})
export class EditComponent implements OnInit {
  profile: any;
  error: any;
  profileForm: FormGroup;
  private fileToUpload: File;

  constructor(private location: Location, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile(parseInt(global.getUserId(), 10)).subscribe(
      (profile) => {
        this.profile = profile;
        this.initForm(profile);
      }
    );
  }

  handleFileInput(files: FileList): void {
    // image validation is on backend
    this.fileToUpload = files.item(0);
  }

  initForm(profile: UserProfileReadModel): void {
    this.profileForm = new FormGroup({
      biography: new FormControl(profile.biography),
    });
  }

  submit(): void {
    const profile = this.profileForm.value;
    profile.user = this.profile.user.id;
    this.userService.updateProfile(profile, this.fileToUpload).subscribe(
      () => this.location.back(),
      (error) => this.error = error
    );
  }

}
