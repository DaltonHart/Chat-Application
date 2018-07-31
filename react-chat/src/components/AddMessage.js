import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
  let input

  return (
    <section id="new-message">

    <div class='ui icon input'>

      <input type='text' 
      placeholder='message' 
      onKeyPress={(e) => {
       if (e.key === 'Enter') {
         props.dispatch(input.value, 'Me')
         input.value = ''
       }
     }}
       type="text"
       ref={(node) => {
       input = node
     }}
      />
    </div>

    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage