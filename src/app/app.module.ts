import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MealsComponent } from './recipes/meals/meals.component';
import { MealDetailComponent } from './recipes/meal-detail/meal-detail.component';
import { MealItemComponent } from './recipes/meals/meal-item/meal-item.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { MealItemEditComponent } from './meals-list/meal-item-edit/meal-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    MealsComponent,
    MealDetailComponent,
    MealItemComponent,
    MealsListComponent,
    MealItemEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
