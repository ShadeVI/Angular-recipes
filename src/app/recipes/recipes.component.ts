import { Component, effect, inject } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipes',
  imports: [RecipeCardComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipeService = inject(RecipesService)
  recipesList = this.recipeService.recipesList

  constructor() {
    effect(() => {
      if (this.recipesList().length === 0) {
        this.recipeService.fetchAllRecipes()
      }
    })
  }
}
