import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component';
import { TodoComponentsComponent } from './todo-components/todo-components.component';
import { TodoListComponent } from './todo-components/todo-list/todo-list.component';
import { TodoItemComponent } from './todo-components/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-components/todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo-components/todo-add/todo-add.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponentsComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ count: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 100, // retains last 100 states
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
