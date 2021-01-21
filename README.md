# Tradewing component demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
And uses styles from bootstrap

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 

### `yarn build` fails to minify

## Target
Simple component that binds select to value of text fields, if the free user range is detected as a match for a dropdown selection it will also change the selection of the select.

The component has three parts, the functional form, that has a function logic hook, useForm, and a validator (YearRangeValidator.js) that could be customized as future changes are needed. 
For instance, if a future date was not acceptable,  such as a future year that has no data, That could be added to the validation code. 

the hook useForm.js gives the components a shared scope, and alows for binding to occur. This could could have been in the component itself, but I chose to add as a hook.

I did have a slight issue with sync on the onChange event, as it comes in with the previous state, and so I hacked the onKeyUp event to force the validation after the state is digested. Overall, if given a bit more time, I could build this in a cleaner way, such as abstrating the select options to an external data set. Ultimately you could make this componet expect both a validator and a collection of data for options. Right now the validator is hard-coded into the useForm logic, so it could be abstracted. 



### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


### `yarn build` fails to minify

## Target
Simple component that binds select to value of text fields, id the free user range isdetected as a match it will all change the selection of the select.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
