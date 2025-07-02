const clientId = 'YOUR_CLIENT_ID'; // Replace with your actual Discord app ID
const discordSdk = new DiscordSDK(clientId);

let score = 0;

async function init() {
  await discordSdk.ready();
  await discordSdk.authorize({ client_id: clientId, scopes: ['identify', 'rpc'] });
  await discordSdk.authenticate();
}

function incrementScore() {
  score++;
  document.getElementById('score').textContent = `Score: ${score}`;
}

document.getElementById('click-btn').addEventListener('click', incrementScore);

init();
