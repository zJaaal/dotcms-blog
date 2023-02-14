import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-list/components/blog-item/blog-item.component';
import { DotImageComponent } from './components/dot-image/dot-image.component';
import { PaginationComponent } from './components/blog-list/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HeaderComponent,
    BlogComponent,
    BlogItemComponent,
    DotImageComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
