const dataSchema ={
  recipeName: '',
  recipeCategory: '',
  creator:{
    id: '',
    name: '',
    role: ''
  },
  ingredientSections: [
    {
      sectionName: '',
      sectionIngredients:[
        {
          ingredientName: '',
          amt: '',
          unit: '',
          hasComponent: false,
          componentId: ''
        },
        {
          ingredientName: '',
          amt: '',
          unit: '',
          hasComponent: false,
          componentId: ''
        }, {
          ingredientName: '',
          amt: '',
          unit: '',
          hasComponent: false,
          componentId: ''
        }
      ]
    },
  ],
  instructions: [
    
  ],
  isComponent: False,
  associatedRecipes: [

  ]
}