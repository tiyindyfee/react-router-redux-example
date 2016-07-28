import React, { Component } from 'react'
import Button from './Button'

var Buttons = (props) => <div className="centered">
  <div className="mdl-grid">
    {[...Array(1)].map((n, i) =>
      <Button key={i + 1} />
    )}
  </div>
</div>

export default Buttons
