import React from 'react'
import alt from '../alt'
import IsomorphicMixin from 'alt/mixins/IsomorphicMixin'
import AltContainer from 'alt/AltContainer'

import TodoList from './controller-views/TodoList'
import TodoStore from '../stores/TodoStore'

module.exports = React.createClass({
  mixins: [IsomorphicMixin.create(alt)],

  render: function () {

    return (
     <AltContainer store={TodoStore}>
      <TodoList />
     </AltContainer>
    );
  }

})
