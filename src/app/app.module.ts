//Import Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Import Components
import { AppComponent } from './app.component';
import { ArtworkDetailsComp } from './artwork-details/artwork-details.component';

// Import services
import { ArtworkService } from './shared/services/artwork.services';

@NgModule({
  declarations: [AppComponent, ArtworkDetailsComp],
  imports: [BrowserModule, HttpModule],
  providers: [ArtworkService],
  bootstrap: [AppComponent]
})

export class AppModule { }
