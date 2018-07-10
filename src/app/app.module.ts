import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Services
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Modules
import { CoreModule } from './core/core.module';
import { GuardsModule } from './guards/guards.module';
import { ResolversModule } from './resolvers/resolvers.module';
import { ServicesModule } from './services/services.module';
import { WidgetsModule } from './widgets/widgets.module';
import { AlertService } from './widgets/alert/alert.service';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        AppRoutingModule,
        CoreModule,
        DirectivesModule,
        GuardsModule,
        ResolversModule,
        WidgetsModule,
        ServicesModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AlertService,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
