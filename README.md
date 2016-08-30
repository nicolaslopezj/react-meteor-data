# React Meteor Data

Fetch Meteor data in React using decorators

### Example

```js
import {Meteor} from 'meteor/meteor'
import {withData} from 'meteor/orionsoft:react-meteor-data'
import MyCollection from './my-collection'

/**
 * Prop will be checked also in the container
 */
const propTypes = {
  itemId: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool,
  item: React.PropTypes.string
}

@withData(({itemId}) => {
  const handler = Meteor.subscribe('myPublication', itemId)
  const isLoading = !handler.ready()
  const item = MyCollection.findOne(itemId)
  return {isLoading, item}
})
export default class Component extends React.Component {

  render () {
    if (this.props.isLoading) return <span/>
    return (
      <div>
        {this.props.item.name}
      </div>
    )
  }

}

Component.propTypes = propTypes
```
