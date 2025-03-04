const path = require('path');

const envPath = path.resolve(__dirname, '../.env');
const { error } = require('dotenv').config({ path: envPath });

if (error) {
  if (process.env.FREECODECAMP_NODE_ENV === 'development') {
    console.warn('.env not found, please copy sample.env to .env');
  } else {
    console.warn(`.env not found. If env vars are not being set another way,
this could be a problem.`);
  }
}

const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  NEWS_LOCATION: news,
  LOCALE: locale,
  STRIPE_PUBLIC_KEY: stripePublicKey,
  ALGOLIA_APP_ID: algoliaAppId,
  ALGOLIA_API_KEY: algoliaAPIKey,
  PAYPAL_CLIENT_ID: paypalClientId,
  DEPLOYMENT_ENV: deploymentEnv,
  SHOW_UPCOMING_CHANGES: showUpcomingChanges
} = process.env;

const locations = {
  homeLocation: home,
  apiLocation: api,
  forumLocation: forum,
  newsLocation: news
};

module.exports = Object.assign(locations, {
  locale,
  deploymentEnv,
  environment: process.env.FREECODECAMP_NODE_ENV || 'development',
  stripePublicKey:
    !stripePublicKey || stripePublicKey === 'pk_from_stripe_dashboard'
      ? null
      : stripePublicKey,
  algoliaAppId:
    !algoliaAppId || algoliaAppId === 'app_id_from_algolia_dashboard'
      ? null
      : algoliaAppId,
  algoliaAPIKey:
    !algoliaAPIKey || algoliaAPIKey === 'api_key_from_algolia_dashboard'
      ? null
      : algoliaAPIKey,
  paypalClientId:
    !paypalClientId || paypalClientId === 'id_from_paypal_dashboard'
      ? null
      : paypalClientId,
  showUpcomingChanges: showUpcomingChanges === 'true'
});
