import { Injectable, signal } from '@angular/core';
import { Recipe } from './recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  protected baseUrl: string = 'https://dummyjson.com/'
  protected recipesUrl: string = 'recipes';

  recipesList = signal<Recipe[]>([])

  constructor(private http: HttpClient) {
  }

  async fetchAllRecipes() {
    this.http.get<{ recipes: Recipe[], total: number, skip: number, limit: number }>(new URL(this.recipesUrl, this.baseUrl).href).subscribe((data) => {
      this.recipesList.set(data.recipes)
    })
    /* fetch(this.baseUrl + this.recipesUrl)
      .then(response => response.json())
      .then(data => {
        this.recipesList.set(data.recipes);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      }).finally(() => { console.log("Fetch done") }); */
  }

  fetchRecipeDetails(id: number) {
    return this.http.get<Recipe>(new URL(`${this.recipesUrl}/${id}`, this.baseUrl).href)
  }
}
