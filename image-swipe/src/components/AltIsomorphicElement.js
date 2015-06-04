import React from 'react'
import alt from '../alt'
import IsomorphicMixin from 'alt/mixins/IsomorphicMixin'
import AltContainer from 'alt/AltContainer'

import Images from './controller-views/Images'
import ImageStore from '../stores/ImageStore'

module.exports = React.createClass({
  mixins: [IsomorphicMixin.create(alt)],

  render: function () {

    return (
     <AltContainer store={ImageStore}>
      <Images />
     </AltContainer>
    );
  }

})
