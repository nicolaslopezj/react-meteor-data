# React Meteor Data

Fetch Meteor data in React using decorators

### Installing

Install the package

```
meteor add orionsoft:react-meteor-data
```

Install the babel decorator

```
npm install --save-dev babel-plugin-transform-decorators-legacy
```

Create or update the ```.babelrc``` file in the root of your app

```js
{
  "plugins": [
    "babel-plugin-transform-decorators-legacy"
  ]
}
```

### Example

```js
import React from 'react'
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
