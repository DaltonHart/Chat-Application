import React from "react"
import PropTypes from "prop-types"
import { Message, Label } from 'semantic-ui-react'

const ChatMessage = ({ message, author }) => (
<div className="messageBox">
  <div>
    <Label  pointing='left'>{message}</Label>
    <p>
      {author}
    </p>
  </div>
</div>

)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ChatMessage