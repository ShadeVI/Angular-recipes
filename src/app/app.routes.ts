import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: {
      title: "Home - My Recipes App",
      description: "Welcome to My Recipes App, where you can find and share delicious recipes!"
    }
  },
  {
    path: "about",
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    data: {
      title: "About - My Recipes App",
      description: "Learn more about My Recipes App and how to use it."
    }
  },
  {
    path: "recipes",
    loadComponent: () => import('./recipes/recipes.component').then(m => m.RecipesComponent),
    data: {
      title: "Recipes - My Recipes App",
      description: "Browse through a collection of delicious recipes."
    }
  },
  {
    path: "recipes/:id",
    loadComponent: () => import('./recipe-detail/recipe-detail.component').then(m => m.RecipeDetailComponent),
    data: {
      title: "Recipe Detail - My Recipes App",
      description: "View the details of a specific recipe."
    }
  }
];
