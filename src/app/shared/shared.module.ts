import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogArticleCardComponent } from './components/blog-article-card/blog-article-card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { FilterDrawerComponent } from './components/filter-drawer/filter-drawer.component';
import { ContentItemsService } from './services/content-items.service';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import {FaqsService} from './services/faqs.service';
import {BlogItemsService} from './services/blog-items.service';
import { SearchComponent } from './components/search/search.component';
import {ContentLoaderModule} from '@ngneat/content-loader';
import {WINDOW_PROVIDERS} from './services/window.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const SHARED_COMPONENTS = [
  NavbarComponent,
  PageHeaderComponent,
  FooterComponent,
  BlogArticleCardComponent,
  FiltersComponent,
  ContentCardComponent,
  FilterDrawerComponent,
  MediaPlayerComponent,
  AccordionComponent,
  SearchComponent
];

const SHARED_SERVICES = [
  ContentItemsService,
  FaqsService,
  BlogItemsService,
  WINDOW_PROVIDERS
]

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  providers: [
    ...SHARED_SERVICES
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    ReactiveFormsModule,
    ContentLoaderModule,
    BrowserAnimationsModule
  ],
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
