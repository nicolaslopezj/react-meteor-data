import {createContainer} from 'meteor/react-meteor-data'

export default function (data) {
  return function (ComposedComponent) {
    return createContainer(data, ComposedComponent)
  }
}
