---
sidebar_position: 10
description: How to integrate a widget in your website
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import { Widget } from '@site/src/components/one';

# How to integrate a widget in your website

In this tutorial we show how you can integrate a widget displaying your Agent on your own website.

:::note
You can visit previous tutorials to see [how to create a Pricing Plan](../builders/create-plan), [how to register a dataset](../builders/register-file-asset) and [how to register an AI service](../builders/register-agent).
:::

## Getting ready

## How to generate the widget code

The steps to generate and integrate the widget are the following:

### 1. Go to `My Agents` or `My Plans` and select Edit widget

<p align="center"><img src="/images/tutorials/05-06-My-assets.png" width="600"/></p>

Just click on the three dots icon and select "Edit Widget".

<p align="center"><img src="/images/tutorials/builders/assets-published-options.png" width="600"/></p>

### 2. Configure the widget properties

<p align="center"><img src="/images/tutorials/widget/widget_config_sceen.png" width="600"/></p>

### 3. Set the layout design between Vertical or Horizontal

<p align="center"><img src="/images/tutorials/widget/widget_layout_horizontal.png" width="600"/></p>

### 4. Set the style between Light or Dark

<p align="center"><img src="/images/tutorials/widget/edit_theme.png" width="600"/></p>

### 5. Change the label text and set the text and button color

<p align="center"><img src="/images/tutorials/widget/widget_change_color.png" width="600"/></p>

### 6. Choose a default language which the Agent or plan details will show

<p align="center"><img src="/images/tutorials/widget/select_lang.png" width="600"/></p>

### 7. Save and generate the widget code

<p align="center"><img src="/images/tutorials/widget/save_config.png" width="600"/></p>

## Code example

Here is an example of a code generated:

```html
<div class="nvm-agent-widget" nvm-did="did:nv:67909ab36a0c6611acf03d189e8f5d2a45b826bd1b1fda79e5936ee9c0c8dbe6" nvm-wid="wid-76bb00df-09ba-411a-9c33-812923d3a8bd" nvm-theme="dark" nvm-layout="horizontal"></div>
<script defer src="https://widgets.testing.nevermined.app/nvm-agent-widget-loader.js"></script>
```

And here is how the widget looks like once integrated in a website:

<BrowserOnly fallback={<div>Loading demo...</div>}>
  {()=> <Widget/>}
</BrowserOnly>

---

:::info
Send us via Discord your integration! We will be happy to share it with the community.
:::
