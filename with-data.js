import {createContainer} from 'meteor/react-meteor-data'

export default function (getData) {
  return function (ComposedComponent) {
    return createContainer(getData, ComposedComponent)
  }
}
