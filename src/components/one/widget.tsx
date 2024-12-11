import React from 'react'
import { insertWidgetScriptBefore } from '../../utils'

export const Widget = () => {
  const onWidgetElementMounted = (widgetElement: HTMLElement | null) => {
    if (widgetElement) {
      insertWidgetScriptBefore(
        'https://widgets.testing.nevermined.app/nvm-agent-widget-loader.js',
        widgetElement,
      )
    }
  }

  return (
    <div
      ref={onWidgetElementMounted}
      className="nvm-agent-widget"
      {...{
        ['nvm-did']: 'did:nv:67909ab36a0c6611acf03d189e8f5d2a45b826bd1b1fda79e5936ee9c0c8dbe6',
        ['nvm-wid']: 'wid-76bb00df-09ba-411a-9c33-812923d3a8bd',
        ['nvm-theme']: 'dark',
        ['nvm-layout']: 'horizontal',
        ['nvm-cta-text-color']: '#ffffff',
        ['nvm-cta-bg-color']: '#3e95ff',
      }}
    />
  )
}
