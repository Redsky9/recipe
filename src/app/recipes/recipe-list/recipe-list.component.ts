import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("French Fries", "How to make French fries explained in detail.", "https://s-media-cache-ak0.pinimg.com/originals/9e/e1/53/9ee153e3a1776bcd25e7e1144de2af09.jpg"),
    new Recipe("Crunchy Rice", "How to make crunchy rice explained in detail.", "http://cdn.skim.gs/image/upload/v1456338035/msi/gluten-free-rice-krispies-treat_ywmrav.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
