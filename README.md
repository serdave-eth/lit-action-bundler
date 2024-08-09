# Bundler For Lit Actions

This project let's you bundle your Lit Action code. This is necessary if you're using any dependencies in your code (aka other libraries).

index.js: the lit action you want bundled. 

edbuild.config.js: some bundler settings that seem to work with some small syntax changes on the output. I was able to get ChatGPT to fix syntax issues in the output. 

dist/bundle.js: the bundled code, which you can use in my lit action sandbox: https://github.com/serdave-eth/lit-action-sandbox. There's a bunch of test actions commented out, all you have to do is uncomment one of them and replace what's in the `` with the output. 

## Installation

1. Clone the repository
2. Run npm install
3. Run npm run build to bundle the code. 
