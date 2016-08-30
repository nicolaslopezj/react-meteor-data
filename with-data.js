import {createContainer} from 'meteor/react-meteor-data'

export default function (target) {
  return function (ComposedComponent) {
    return createContainer(target, ComposedComponent)
  }
}
