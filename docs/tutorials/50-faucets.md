---
sidebar_position: 50
description: What faucets can you use to start playing with Nevermined environments
---

# Getting tokens for testnets

## Testnets

For testing purposes, we have also deployed the application on the following testnets. Using these networks has the benefit you can try the application while using 'test tokens' (without any value) to pay for transaction fees.

Note that you shouldn't register your real assets, as they will become available in the marketplace. 

- [Mumbai](https://mumbai.nevermined.app) (for Polygon)
- [Chiado](https://chiado.nevermined.app) (for Gnosis)
- [Goerli](https://goerli.nevermined.app/) (for Arbitrum)
  

## Getting tokens for Mumbai, the testnet for Polygon

To publish a Smart Subscription (and the associated AI web service or Data) you need some MATIC, to pay for the network transaction fees. 

### Getting testnet MATIC
Faucets are applications where you can claim some (valueless) test tokens. 
For Mumbai, you can use https://faucet.polygon.technology or https://faucet.quicknode.com/

- Go to the MetaMask extension in your browser.
- Hover over your account and copy your wallet address (starting with 0x)
- Paste it in the Wallet Address Field

<p align="center"><img src="/images/tutorials/50-Testnet-Mumbai-Matic.png" /></p>

### Getting testnet USDC for Mumbai Polygon
If you want to try the Purchasing flow, you need to get some testnet USDC. 
We're not aware of any faucets where you can claim them. 

An alternative way of getting USDC is using the testnet version of the Uniswap exchange. 
- Make sure you're connected to the Mumbai network
- Go to https://app.uniswap.org/#/swap
- Swap some (small amount of) MATIC for USDC.
- If USDC doesn't show up in the token list, click Select Token and paste 0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e in the token address field. This is the contract for the testnet USDC.

<p align="center"><img src="/images/tutorials/50-Testnet-Mumbai-USDC-Uniswap.png" /></p>


## Getting tokens for Chiado, the testnet for Gnosis

To publish a Smart Subscription (and the associated AI web service or Data) you need some xDAI, to pay for the network transaction fees. 

### Getting testnet xDAI

https://gnosisfaucet.com/ dispenses a small amount of xDAI. 

- Make sure to select the Chiado network from the dropdown.
- Paste your wallet address
- Complete the Catpcha.

<p align="center"><img src="/images/tutorials/50-Testnet-Chiado-xDAI.png" /></p>

### Getting testnet USDC for Chiado Gnosis
We're not aware of any straightforward way to get USDC for Chiado testnet. 
If you want to try out the purchasing flow, we recommend you use Polygon Mumbai or Arbitrum Goerli. They flows are identical on each network. 


## Getting tokens for Goerli, the testnet for Arbitrum

To publish a Smart Subscription (and the associated AI web service or Data) you need some Arbitrum ETH, to pay for the network transaction fees. 

### Getting testnet ETH

[https://gnosisfaucet.com/](https://faucet.quicknode.com/arbitrum/goerli) dispenses a small amount of xDAI. 

- Select Arbitrum and Goerli from the dropdowns.
- Connect your MetaMask to complete the wallet address field.
- Optionally you can tweet to double the amount of test ETH you will receive.
(note: the faucet will say ARB, which is 

<p align="center"><img src="/images/tutorials/50-Testnet-Goerli-ETH" /></p>


### Getting testnet USDC for Arbitrum Goerli
Do not use the Arbitrum Goerli version of Uniswap to swap some ETH to USDC. The Nevermined marketplace uses the Circle USDC version for testing (token contract: 0xfd064A18f3BF249cf1f87FC203E90D8f650f2d63) and that is not (yet) available to trade on Uniswap.  
