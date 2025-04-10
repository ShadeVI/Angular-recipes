import { Injectable, signal } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  protected baseUrl: string = 'https://dummyjson.com/'
  protected recipesUrl: string = 'recipes';

  recipesList = signal<Recipe[]>([])

  constructor() {
    this.fetchAllRecipes()
  }

  async fetchAllRecipes() {
    console.log("Fetch")
    fetch(this.baseUrl + this.recipesUrl)
      .then(response => response.json())
      .then(data => {
        this.recipesList.set(data.recipes);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        throw error;
      }).finally(() => { console.log("Fetch done") });
  }
}
