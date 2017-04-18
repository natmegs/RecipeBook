import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "Sour Cream Glazed",
      "The supreme donut",
      "https://www.thesugarpixie.net/wp-content/uploads/2015/02/SourCream_OldFashioned2-e1423685370680.jpg",
      [
        new Ingredient("Sugar", 5),
        new Ingredient("Butter", 10)
      ]
    ),
    new Recipe(
      "Chocolate Glazed",
      "Another excellent donut",
      "http://www.runningwithspoons.com/wp-content/uploads/2013/11/Chubby-Chocolate-Glazed-Donuts.jpg",
      [
        new Ingredient("Flour", 3),
        new Ingredient("Egg", 4)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
