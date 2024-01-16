import React from 'react'
import { insertWidgetScriptBefore } from '../../utils'

export const Widget = () => {
  const onWidgetElementMounted = (widgetElement: HTMLElement | null) => {
    if (widgetElement) {
      insertWidgetScriptBefore(
        'https://widgets.testing.nevermined.app/nvm-one-widget-loader.js',
        widgetElement,
      )
    }
  }

  return (
    <div
      ref={onWidgetElementMounted}
      className="nvm-one-widget"
      {...{
        ['nvm-did']: 'did:nv:953574e93054b943a5c5935203024794e32e692154761442b70c1fcc0da362b8',
        ['nvm-wid']: 'wid-74aabcf4-9441-4fb4-946b-38242928cc6e',
        ['nvm-cta-text']: 'See More',
        ['nvm-theme']: 'dark',
        ['nvm-cta-text-color']: '#cf0a0a',
        ['nvm-cta-bg-color']: '#3effe4',
      }}
    />
  )
}
