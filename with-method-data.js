import React from 'react'
import _ from 'underscore'

export default function (getData) {
  return function (ComposedComponent) {
    return class Component extends React.Component {

      constructor (props) {
        super(props)
        this.state = {
          isLoading: true
        }
      }

      componentWillReceiveProps (nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
          this.fetchData(nextProps)
        }
      }

      componentWillMount () {
        this.fetchData(this.props)
      }

      fetchData (props) {
        this.setState({isLoading: true})
        getData(props, (error, response) => {
          this.setState({isLoading: false, response, error})
        })
      }

      render () {
        return <ComposedComponent {...this.props} {...this.state} {...this.state.response}/>
      }

    }
  }
}
