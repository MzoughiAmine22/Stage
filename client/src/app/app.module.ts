import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormationComponent } from './components/formation/formation.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { matSortAnimations, MatSortModule } from '@angular/material/sort';
import { DialogFComponent } from './components/dialog-f/dialog-f.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupuserComponent } from './components/signupuser/signupuser.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogCComponent } from './components/dialog-c/dialog-c.component';
import { DialogTComponent } from './components/dialog-t/dialog-t.component';
import { FilterPipe } from './filter.pipe';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    DialogComponent,
    FormateurComponent,
    FormationComponent,
    ConfirmationComponent,
    DialogFComponent,
    DashboardComponent,
    MenuComponent,
    ErrorComponent,
    LoginAdminComponent,
    FooterComponent,
    AboutComponent,
    ChangePassComponent,
    CartComponent,
    SignupuserComponent,
    LoginuserComponent,
    DialogCComponent,
    DialogTComponent,
    FilterPipe,
    UserInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
