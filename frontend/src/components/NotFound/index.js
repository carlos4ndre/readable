import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <Header color='violet' textAlign='center'>Not Found</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image
          centered
          size='big'
          src={require('./images/drunken-cat.jpg')}
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign='center'>
        <Link to='/'>Go back to home page</Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default NotFound
