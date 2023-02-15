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
import { TagComponent } from './components/blog/tag/tag.component';
import { BlogProcessorComponent } from './components/blog-processor/blog-processor.component';
import { ParagraphComponent } from './components/blog-processor/components/paragraph/paragraph.component';
import { TextComponent } from './components/blog-processor/components/text/text.component';
import { HeadingComponent } from './components/blog-processor/components/heading/heading.component';
import { BulletListComponent } from './components/blog-processor/components/bullet-list/bullet-list.component';

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
    ParagraphComponent,
    TextComponent,
    HeadingComponent,
    BulletListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
