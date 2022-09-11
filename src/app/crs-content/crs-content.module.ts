import { CrsService } from './services/crs.service';
import { CrsContentComponent } from './crs-content.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PickListModule } from 'primeng/picklist';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
// import { FileNamePipe } from '../flw/pages/feature/pipes/file-name.pipe';
// import { InterceptorJwt } from '../service/security/jwt/interceptor-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { FieldsetModule } from 'primeng/fieldset';
import { ChartModule } from 'primeng/chart';
import {ScrollPanelModule} from 'primeng/scrollpanel';


@NgModule({
  declarations: [CrsContentComponent],
  imports: [
    CommonModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    InputNumberModule,
    ProgressBarModule,
    HttpClientModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    PickListModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    CheckboxModule,
    MessagesModule,
    MessageModule,
    TreeModule,
    ConfirmDialogModule,
    InputTextareaModule,
    PanelModule,
    ReactiveFormsModule,
    CardModule,
    StepsModule,
    FieldsetModule,
    ChartModule,
    MatButtonModule,
    ScrollPanelModule,

    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatDividerModule,
    // MatSelectModule,
    // MatFormFieldModule,
    // AngularEditorModule,
    // NgxMatSelectSearchModule,
    // ModalModule.forRoot(),
    // TimepickerModule.forRoot(),
    // CollapseModule.forRoot(),
  ],
  exports: [CrsContentComponent],
  providers: [MessageService, ConfirmationService, CrsService],
})
export class CrsContentModule {}
