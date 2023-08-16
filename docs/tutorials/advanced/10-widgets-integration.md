---
sidebar_position: 10
description: How to integrate a widget in your website
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import { Widget } from '@site/src/components/one';

# How to integrate a widget in your website

In this tutorial we show how you can integrate a widget showing your assets registered on Nevermined on your website.

## Getting ready


## How to generate the widget code

The steps to generate the widget are the following:

### 1. Go to `My Assets` or `My Plans` and select Edit widget:

![My Assets](/images/tutorials/widget/widget_edit_select.png)

![My Plans](/images/tutorials/widget/edit_widget_plans.png)


### 2. Configure the widget properties

![Config Widget](/images/tutorials/widget/widget_config_sceen.png)

### 3. Set the layout design between Light or Dark

![Layout design](/images/tutorials/widget/edit_theme.png)

### 4. Change the label text and set the text and button color

![Button Config](/images/tutorials/widget/change_label.png)

### 5. Choose a default language which the asset or plan details will show

![Select Language](/images/tutorials/widget/select_lang.png)

### 6. Save the code:

![Save the code](/images/tutorials/widget/save_config.png)

### 7. Click in Show HTML and Copy the code

![Copy de code](/images/tutorials/widget/copy_code.png)

## Code example

Here is a example of a code generated:

```html
<div class="nvm-one-widget" nvm-did="did:nv:953574e93054b943a5c5935203024794e32e692154761442b70c1fcc0da362b8" nvm-wid="wid-74aabcf4-9441-4fb4-946b-38242928cc6e" nvm-cta-text="See more" nvm-cta-text-color="#cf0a0a" nvm-cta-bg-color="#3effe4" nvm-theme="dark"></div>
<script defer src="https://widgets.goerli.nevermined.one/nvm-one-widget-loader.js"></script>
```

And here another example of the widget generated:

<BrowserOnly fallback={<div>Loading demo...</div>}>
  {()=> <Widget/>}
</BrowserOnly>

