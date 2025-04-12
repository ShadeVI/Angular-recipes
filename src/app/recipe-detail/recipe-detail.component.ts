import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  // Obtener el id de la receta desde la URL
  route: ActivatedRoute = inject(ActivatedRoute)
  recipeService = inject(RecipesService)
  recipeId: number = Number(this.route.snapshot.paramMap.get('id'))
  recipeDetails = signal<Recipe | null>(null)

  constructor() {
    effect(() => {
      this.recipeService.fetchRecipeDetails(this.recipeId).subscribe((recipe) => {
        this.recipeDetails.set(recipe)
      })
    })
  }
}
