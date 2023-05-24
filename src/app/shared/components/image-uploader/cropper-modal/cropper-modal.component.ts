import { Component, Inject, OnInit } from '@angular/core';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageUploaderComponent } from '../image-uploader.component';

interface DialogData {
  e: Event;
}

@Component({
  selector: 'app-cropper-modal',
  templateUrl: './cropper-modal.component.html',
  styleUrls: ['./cropper-modal.component.scss'],
})
export class CropperModalComponent implements OnInit {
  imageChangedEvent = '';
  croppedImage = '';
  scale = 1;
  showCropper = false;
  transform: ImageTransform = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private dialogRef: MatDialogRef<ImageUploaderComponent>
  ) {}

  ngOnInit() {
    this.fileChangeEvent(this.data.e);
  }

  fileChangeEvent(event: string | Event): void {
    this.imageChangedEvent = event as string;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    this.showCropper = true;
  }

  save() {
    this.dialogRef.close({ data: this.croppedImage });
  }
}
