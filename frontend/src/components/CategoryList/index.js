import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

const CategoryList = (props) => (
  <Grid
    centered
    padded
    textAlign='center'
    columns='equal'>
      {props.categories.map((category, index) => (
        <Grid.Column key={index}>
          <Button fluid color={category.color}>{category.name}</Button>
        </Grid.Column>
      ))}
  </Grid>
)

export default CategoryList
