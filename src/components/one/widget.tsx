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
        ['nvm-did']: 'did:nv:e51f0c4befe8bda1a5bc741f7b2cef2389a935119c5f9d06ecf0d0670659403f',
        ['nvm-wid']: 'wid-801506b6-8936-4261-b183-43005b2e4352',
        ['nvm-cta-text']: 'Tell me baby',
        ['nvm-theme']: 'dark',
        ['nvm-layout']: 'horizontal',
        ['nvm-cta-text-color']: '#ffffff',
        ['nvm-cta-bg-color']: '#3e95ff',
      }}
    />
  )
}
