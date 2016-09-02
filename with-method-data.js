import React from 'react'
import _ from 'underscore'

export default function (getData) {
  return function (ComposedComponent) {
    return class Component extends React.Component {

      constructor (props) {
        super(props)
        this.state = {
          data: null,
          error: null,
          isLoading: true
        }
      }

      componentWillReceiveProps (nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
          this.fetchData()
        }
      }

      componentWillMount () {
        this.fetchData()
      }

      fetchData () {
        this.setState({isLoading: true})
        getData(this.props, (error, response) => {
          this.setState({isLoading: false, response, error})
        })
      }

      render () {
        return <ComposedComponent {...this.props} {...this.state} {...this.state.response}/>
      }

    }
  }
}
