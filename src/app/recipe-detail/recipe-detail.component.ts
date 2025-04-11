import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  // Obtener el id de la receta desde la URL
  route: ActivatedRoute = inject(ActivatedRoute)
  recipeId: number = Number(this.route.snapshot.paramMap.get('id'))
}
