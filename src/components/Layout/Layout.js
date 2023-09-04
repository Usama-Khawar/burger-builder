import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import style from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar clicked={this.sideDrawerToggleHandler} />
        (this.state.showSideDrawer &&
        <SideDrawer
          open={this.state.showSideDrawer}
          close={this.sideDrawerClosedHandler}
        />
        )<main className={style.content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
