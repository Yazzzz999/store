const blockedCountries = ['RU', 'CN', 'KP', 'HK']; // Example: Russia, China, North Korea

async function checkUserCountry() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const userCountry = data.country_code;
    
    if (blockedCountries.includes(userCountry)) {
      document.body.innerHTML = '<h1>Access Denied</h1><p>Sorry, this website is not available in your country.</p>';
    } else {
      console.log('Access granted');
    }
  } catch (error) {
    console.error('Error checking user country:', error);
  }
}
window.onload = checkUserCountry;