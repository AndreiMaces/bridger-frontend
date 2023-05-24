import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CropperModalComponent } from './cropper-modal/cropper-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @Input() imageFormControl: FormControl;
  base64textString: string;
  croppedImage: string;
  constructor(private dialogRef: MatDialog) {}

  fileChangeEvent(event: Event) {
    const dialog = this.dialogRef.open(CropperModalComponent, {
      height: '30rem',
      width: '80rem',
      data: { e: event },
    });
    dialog.afterClosed().subscribe((res) => {
      this.croppedImage = res.data;
      this.imageFormControl.setValue(this.croppedImage);
    });
  }

  removeImage(): void {
    this.croppedImage = '';
  }
}
