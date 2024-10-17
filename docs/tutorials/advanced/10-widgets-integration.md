---
sidebar_position: 10
description: How to integrate a widget in your website
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import { Widget } from '@site/src/components/one';

# How to integrate a widget in your website

In this tutorial we show how you can integrate a widget showing your asset on your own website.

:::note
You can visit previous tutorials to see [how to create a Payment Plan](../builders/create-plan), [how to register a dataset](../builders/register-file-asset) and [how to register an AI service](../builders/register-agent).
:::

## Getting ready

## How to generate the widget code

The steps to generate and integrate the widget are the following:

### 1. Go to `My Assets` or `My Plans` and select Edit widget

<p align="center"><img src="/images/tutorials/05-06-My-assets.png" width="600"/></p>

Just click on the three dots icon and select "Edit Widget".

<p align="center"><img src="/images/tutorials/builders/assets-published-options.png" width="600"/></p>

### 2. Configure the widget properties

<p align="center"><img src="/images/tutorials/widget/widget_config_sceen.png" width="600"/></p>

### 3. Set the layout design between Vertical or Horizontal

<p align="center"><img src="/images/tutorials/widget/widget_layout_horizontal.png" width="600"/></p>

### 3. Set the style between Light or Dark

<p align="center"><img src="/images/tutorials/widget/edit_theme.png" width="600"/></p>

### 4. Change the label text and set the text and button color

<p align="center"><img src="/images/tutorials/widget/widget_change_color.png" width="600"/></p>

### 5. Choose a default language which the asset or plan details will show

<p align="center"><img src="/images/tutorials/widget/select_lang.png" width="600"/></p>

### 6. Save and generate the widget code

<p align="center"><img src="/images/tutorials/widget/save_config.png" width="600"/></p>

## Code example

Here is a example of a code generated:

```html
<div class="nvm-one-widget" nvm-did="did:nv:e51f0c4befe8bda1a5bc741f7b2cef2389a935119c5f9d06ecf0d0670659403f" nvm-wid="wid-801506b6-8936-4261-b183-43005b2e4352" nvm-cta-text="Tell me baby" nvm-cta-bg-color="#3e95ff" nvm-theme="dark" nvm-layout="horizontal"></div>
<script defer src="https://widgets.testing.nevermined.app/nvm-one-widget-loader.js"></script>
```

And here is how the widget looks like once integrated in a website:

<BrowserOnly fallback={<div>Loading demo...</div>}>
  {()=> <Widget/>}
</BrowserOnly>

---

:::info
Send us via Discord your integration! We will be happy to share it with the community.
:::
