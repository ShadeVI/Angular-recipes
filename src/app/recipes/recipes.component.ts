import { Component, inject } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipeService = inject(RecipesService)
  recipesList = this.recipeService.recipesList

  constructor() {
    if (this.recipesList().length === 0) {
      this.recipeService.fetchAllRecipes()
    }
  }
}
