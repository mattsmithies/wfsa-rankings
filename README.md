# wfsa-rankings

Uses a [Webtask](https://webtask.io/) by [Auth0](https://auth0.com/), and provides a free simple serverless FAAS (Functions As A Service).

This points to a hosted POC of API and client for retrieving the WFSA rankings.

# Hosting your own.

```sh
yarn run start
```

Follow the on screen instructions and login/register to a Auth0 account using your Github credentials. This process should be relatively straight forward and automatic.

Feel free to modify the code to add/remove new endpoints.

Your code should automatically propagate on save, if you have a console tab open which has run the yarn start command.

# GET Endpoints

### Resource types (Leagues)

- pro
- am
- masters
- women

## HTML Table data

`https://wt-37cb7b0b5e3df0443a6cf966cc71d66a-0.sandbox.auth0-extend.com/rankings/{{type}}`

## HTML Table data

`https://wt-37cb7b0b5e3df0443a6cf966cc71d66a-0.sandbox.auth0-extend.com/rankings/{{type}}/data`
