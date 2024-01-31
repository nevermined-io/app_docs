import React from 'react'
import { insertWidgetScriptBefore } from '../../utils'

export const SuperAgentWidget = () => {
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
        ['nvm-did']: 'did:nv:017a98cc62944d4dccb15168bfd2ec4ae2c7754a1d4927112e21cc946adefdc9',
        ['nvm-wid']: 'wid-28df8bed-5792-4c18-bd1d-bce81b3cb266',
        ['nvm-cta-text']: 'Agent Browser',
        ['nvm-theme']: 'dark',
        ['nvm-layout']: 'horizontal',
        ['nvm-cta-text-color']: '#ffffff',
        ['nvm-cta-bg-color']: '#3e95ff',
      }}
    />
  )
}
