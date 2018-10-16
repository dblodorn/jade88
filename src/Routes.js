import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import Document from './Document'
import { NotFound, Templates, SingleVideo, Shop } from './views'

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes_built: false
    };
    this._buildRoutes = this._buildRoutes.bind(this)
  }

  componentDidMount() {
    console.log('app Mounted')
  }

  _buildRoutes = (routes) => {
    if(!this.routes) {
      return routes.map((page, i) => {
        if (!page.is_home) {
          return(
            <Route exact path={`/${page.slug}`} component={Templates} key={'page' + page.slug + i}/>
          )
        } else {
          return (
            <Route exact path={'/'} component={Shop} key={'home'}/>
          )
        }
      })
      this.setState({
        routes_built: true
      });
    }
  }

  render() {
    return (
      <Document>
        <Switch>
          {(this.props.cart) && <Route exact path={'/'} component={Shop} key={'home'}/>}
          <Route component={NotFound}/>
        </Switch>
      </Document>
    )
  }
}

export default connect(
  state => ({
    router: state.router,
    cart: state.cart
  })
)(Routes)
