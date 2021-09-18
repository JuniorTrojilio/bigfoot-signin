import React from 'react';

export function Checkbox() {
  return (
    <label id="showPasswordToggle" htmlFor="showPasswordToggle">Show
      <input id="showPasswordToggle" type="checkbox" />
      <div className="indicator"></div>
    </label>
  )
}