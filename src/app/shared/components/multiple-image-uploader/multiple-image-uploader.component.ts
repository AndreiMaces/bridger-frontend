import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CropperModalComponent } from '../image-uploader/cropper-modal/cropper-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-multiple-image-uploader',
  templateUrl: './multiple-image-uploader.component.html',
  styleUrls: ['./multiple-image-uploader.component.scss'],
})
export class MultipleImageUploaderComponent {
  @Input() imageFormControl: FormControl;
  base64Array: string[] = [];

  constructor(private dialogRef: MatDialog) {}

  fileChangeEvent(event: Event) {
    const dialog = this.dialogRef.open(CropperModalComponent, {
      height: '30rem',
      width: '80rem',
      data: { e: event },
    });
    dialog.afterClosed().subscribe((res) => {
      this.base64Array.push(res.data);
      this.imageFormControl.setValue(this.base64Array);
    });
  }

  removeImage(i: number): void {
    this.base64Array.splice(i, 1);
  }
}
