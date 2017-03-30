import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }


  render () {
    const { activeItem } = this.state;

    return (
      <div>
        <Divider hidden />
        <Divider />

        <Grid padded container columns='2'>

          <Grid.Column floated='left' verticalAlign='middle'>
            <Link to="/">PitchMe.io</Link>
          </Grid.Column>

          <Grid.Column floated='right' verticalAlign='middle'>
            <Menu text>
              <Menu.Menu position='right'>
                <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='how it works' as={Link} to='/howitworks' active={activeItem === 'how it works'} onClick={this.handleItemClick} />
                <Menu.Item name='startups' as={Link} to='/startups' active={activeItem === 'startups'} onClick={this.handleItemClick} />
              </Menu.Menu>
            </Menu>
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}