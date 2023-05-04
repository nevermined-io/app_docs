[![banner](https://raw.githubusercontent.com/nevermined-io/assets/main/images/logo/banner_logo.png)](https://nevermined.io)


# Nevermined Documentation

> http://docs.nevermined.app/


[![Twitter](https://img.shields.io/twitter/follow/nevermined_io?style=social)](https://twitter.com/nevermined_io)
[![Discord](https://img.shields.io/discord/775670012446507028.svg?color=7289da&label=Discord&logo=discord&style=flat-square)](https://discord.gg/GZju2qScKq)

Nevermined App is an online tool that allows the publication and tokenization of data and web services.

Nevermined is the product powered by [Nevermined AG](https://nevermined.io).

## Social

* Discord: https://discord.gg/GZju2qScKq
* Twitter: https://twitter.com/Nevermined_io
* Medium: https://medium.com/nevermined-io
* LinkedIn: https://www.linkedin.com/company/nevermined


## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
