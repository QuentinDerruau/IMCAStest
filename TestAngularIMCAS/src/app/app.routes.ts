import { Routes } from '@angular/router';
        import { AppComponent } from './app.component';
        import { ItemsComponent } from './items/items.component';

        export const appRoutes: Routes = [

              {
                  path : '',
                  component:AppComponent
              },
              {
                  path : '/test',
                  component:ItemsComponent
              }
       ];