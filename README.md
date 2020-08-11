# arc-authors
Tool to manage *authors* in ARC from the *author-service*, since some things can't be done via UI. 
For now the only utility of this repo is to generate *slugs* for the *authors* within the *author-service*, since this field is not generated automatically, can't be modified via UI, and it's a key value to filter authors if you use the [author API](https://redirector.arcpublishing.com/?redirectTo=%2Falc%2Fdocs%2Fswagger%2F%3Furl%3D.%2Farc-products%2Fauthors.json).

## Usage
You will need to *clone* this repo since has been made to run on your terminal.
Install the dependencies running:
```
npm i
```
Create an `.env` file to set your *environment variables*.
After you have done this, you can start generating *slugs* for your *authors* in the ARC *author-service*, running:
```
npm run slugs
```

## Environment variables
You need to set up these variables:

*./.env*
```
ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
ARCSITE=your-site-id
```
