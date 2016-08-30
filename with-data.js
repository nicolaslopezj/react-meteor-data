import {createContainer} from 'meteor/react-meteor-data'

export default function (func) {
  return function (ComposedComponent) {
    return createContainer(func, ComposedComponent)
  }
}
