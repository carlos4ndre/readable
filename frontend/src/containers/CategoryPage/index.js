import React from 'react'

const CategoryPage = (props) => (
  <div>
    <p>Category #{props.match.params.categoryId}</p>
  </div>
)

export default CategoryPage
