import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import Categories from 'data/Categories'

const CategoryList = () => (
  <Grid
    centered
    padded
    textAlign='center'
    columns='equal'>
      {Categories.map((category, index) => (
        <Grid.Column key={index}>
          <Button fluid color={category.color}>{category.name}</Button>
        </Grid.Column>
      ))}
  </Grid>
)

export default CategoryList
