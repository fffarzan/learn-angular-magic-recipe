import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Testy Schnitzel',
      'Just awesome!',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?!',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Fatbuger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1431449537270.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // Getting a copy of data with `slice()`. (Data should not be 
    // accessable from outside).
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}