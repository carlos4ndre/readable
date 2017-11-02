import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react'
import { getCategories } from 'actions/categories'
import Header from 'components/Header'
import CategoryList from 'components/CategoryList'

class HomePage extends Component {
  componentWillMount() {
    this.props.dispatch(getCategories())
  }

  render() {
    const { categories } = this.props

    return (
      <div>
        <Header categories={categories}/>
        <CategoryList categories={categories}/>
        <Divider fitted/>
      </div>
    )
  }
}

HomePage.PropTypes = {
  dispatch: PropTypes.func,
}

const mapStateToProps = (state) => {
  console.log(state)
  const categories = state.categories

  return {
    categories
  }
}

export default connect(mapStateToProps)(HomePage)
