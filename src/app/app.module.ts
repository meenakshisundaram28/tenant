import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './effects/auth.effects';
import { authReducer } from './reducers/auth.reducer';
import { provideHttpClient  } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer }),
    // EffectsModule.forRoot([AuthEffects]),
    // StoreDevtoolsModule.instrument({ maxAge: 25 }), 
  ],
  providers: [provideHttpClient(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
