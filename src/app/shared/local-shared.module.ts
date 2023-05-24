import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { MatIconModule } from '@angular/material/icon';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './components/card/card.component';
import { GoBackHeaderComponent } from './components/go-back-header/go-back-header.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { CoreModule } from '../_core/core.module';
import { ElementNamePriceCategoryFormComponent } from './components/element-name-price-category-form/element-name-price-category-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MultipleImageUploaderComponent } from './components/multiple-image-uploader/multiple-image-uploader.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { MatInputModule } from '@angular/material/input';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperModalComponent } from './components/image-uploader/cropper-modal/cropper-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { FormatTextFromCamelCasePipe } from './pipes/format-text-from-camel-case.pipe';

@NgModule({
  declarations: [
    HeroComponent,
    CarrouselComponent,
    NavbarComponent,
    FooterComponent,
    SanitizeUrlPipe,
    ButtonComponent,
    InputComponent,
    SidenavComponent,
    CardComponent,
    GoBackHeaderComponent,
    ImageUploaderComponent,
    ElementNamePriceCategoryFormComponent,
    SearchFieldComponent,
    FilterInputComponent,
    MultipleImageUploaderComponent,
    CropperModalComponent,
    ObjectToArrayPipe,
    FormatTextFromCamelCasePipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CoreModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ImageCropperModule,
    MatDialogModule,
  ],
  exports: [
    HeroComponent,
    CarrouselComponent,
    NavbarComponent,
    FooterComponent,
    SanitizeUrlPipe,
    ButtonComponent,
    InputComponent,
    SidenavComponent,
    CardComponent,
    GoBackHeaderComponent,
    ImageUploaderComponent,
    ElementNamePriceCategoryFormComponent,
    SearchFieldComponent,
    FilterInputComponent,
    MultipleImageUploaderComponent,
    ObjectToArrayPipe,
    FormatTextFromCamelCasePipe,
  ],
})
export class LocalSharedModule {}
