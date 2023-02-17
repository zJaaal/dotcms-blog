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
import { TagComponent } from './components/tag/tag.component';
import { BlogProcessorComponent } from './components/blog-processor/blog-processor.component';
import { TextComponent } from './components/blog-processor/components/text/text.component';
import { HeadingComponent } from './components/blog-processor/components/heading/heading.component';
import { DotContentComponent } from './components/blog-processor/components/dot-content/dot-content.component';
import { ProductComponent } from './components/blog-processor/components/dot-content/components/product/product.component';
import { DefaultComponent } from './components/blog-processor/components/default/default.component';
import { DestinationComponent } from './components/blog-processor/components/dot-content/components/destination/destination.component';
import { BlogHeadingComponent } from './components/blog/components/blog-heading/blog-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HeaderComponent,
    BlogComponent,
    BlogItemComponent,
    DotImageComponent,
    PaginationComponent,
    TagComponent,
    BlogProcessorComponent,
    TextComponent,
    HeadingComponent,
    DotContentComponent,
    ProductComponent,
    DefaultComponent,
    DestinationComponent,
    BlogHeadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
