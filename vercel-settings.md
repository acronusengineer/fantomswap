# Fantomswap Build Guide on vercel

## Build & Development Settings

Build Command: yarn build
Install Command: yarn

## Node version

18.x

## Environment variables

REACT_APP_AMPLITUDE_PROXY_URL="https://api.uniswap.org/v1/amplitude-proxy"
REACT_APP_AWS_API_REGION="us-east-2"
REACT_APP_AWS_API_ENDPOINT="https://beta.api.uniswap.org/v1/graphql"
REACT_APP_TEMP_API_URL="https://temp.api.uniswap.org/v1"
REACT_APP_SENTRY_DSN="https://a3c62e400b8748b5a8d007150e2f38b7@o1037921.ingest.sentry.io/4504255148851200"
REACT_APP_SENTRY_ENABLED=false
ESLINT_NO_DEV_ERRORS=true
REACT_APP_INFURA_KEY="4bf032f2d38a4ed6bb975b80d6340847"
REACT_APP_MOONPAY_API="https://api.moonpay.com"
REACT_APP_MOONPAY_LINK="https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkStaging?platform=web"
REACT_APP_MOONPAY_PUBLISHABLE_KEY="pk_test_DycfESRid31UaSxhI5yWKe1r5E5kKSz"

## Add one more variable

NODE_OPTIONS  --openssl-legacy-provider