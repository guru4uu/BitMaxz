// CONFIGURE THESE SETTINGS

var TESTNET = false;

module.exports = {

TESTNET: TESTNET,

// API KEYS GO HERE

blocktrail_opts: {
    apiKey: "123",
    apiSecret: "123",
    network: "BTC",
    testnet: TESTNET
},

WALLET_NAME: '',
WALLET_PASS: '',

TELE_TOKEN: '991578908:AAH89YDjt_faq_6053Rnek8IKazfK8U20bw', // looks like '123456789:AAG90e14-0f8-40183D-18491dDE'

BOTNAME: 'BitMax', // the name of your bot
BOT_USERNAME: 'BitMaxz', // your bot's username (without the @)

HEROKU_URL: 'https://lit-tor-41722.herokuapp.com/',

// BOT PARAMETERS
// these need to be filled in with user_ids (as integers)

ADMIN_LIST: [34173195], // these users will have access to admin menu
// any user in the following two groups must also be in the above
APPROVAL_ADMIN_LIST: [34173195], // these admins will be notified whenever a user
// tries to make a withdrawal, only they can approve said withdrawal
DEV_ADMIN_LIST: [34173195], // these admins have access to some extra commands

// these are specific to the type of scheme you want to run
REFERRAL_BONUSES: [0.03, 0.02, 0.01],
TIME_DELAY: 24, // delay in hours before beginning to pay interest
MAX_PROFIT: 1.8, // means that the maximum amount of bonus is 180%

// interest is randomly calculated after initial time delay, proportionally to time elapsed
// so if 2 days have passed since deposit, the user will get interest of (a random percent between 3 & 6%) * 2
MIN_INTEREST_RATE: 0.01,
MAX_INTEREST_RATE: 0.01,
MIN_DEPOSIT: 0.0001, // minimum amount needed for deposit to count (in btc),
MIN_WITHDRAWAL: 0.0001, // minimum amount needed to withdraw (in btc),

// these people get double referral bonuses for being the first 25 non-admin users
NO_PRELAUNCHERS: 00,
}
///// end of config