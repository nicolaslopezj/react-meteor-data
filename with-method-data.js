import React from 'react'

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

      componentWillMount () {
        this.fetchData()
      }

      fetchData () {
        this.setState({isLoading: true})
        getData(this.props, (error, data) => {
          if (error) {
            this.setState({isLoading: false, data: null, error})
          } else {
            this.setState({isLoading: false, data, error: null})
          }
        })
      }

      render () {
        return <ComposedComponent {...this.props} {...this.state}/>
      }

    }
  }
}
