const appData = [
    { name: "Donation", image: "dono_icon.png", description: "Donate to me!", price: "$1+", id: "66ae9c2f3301c"},
    { name: "Yazz CS - Free", image: "yazz_cs_preview.png", description: "Yazz's Free CS2 multi cheat!", price: "FREE or Pay what you want", id: "66aea6b000638"}
];

const appGrid = document.getElementById('app-grid');
const searchInput = document.getElementById('search');

function createAppTile(app) {
    const tile = document.createElement('div');
    tile.className = 'app-tile';
    tile.innerHTML = `
        <img src="${app.image}" alt="${app.name}" class="app-image">
        <div class="app-name">${app.name}</div>
        <div class="app-description">${app.description}</div>
        <div class="app-price">${app.price}</div>
        <button class="purchase-btn" data-sellix-product=${app.id} type="submit" alt="Purchase Now with sellix.io">Purchase</button>
    `;
    
    //tile.querySelector('.purchase-btn').addEventListener('click', () => {});
    
    return tile;
}

function displayApps(apps) {
    appGrid.innerHTML = '';
    apps.forEach(app => {
        appGrid.appendChild(createAppTile(app));
    });
}

function filterApps(searchTerm) {
    return appData.filter(app => 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

searchInput.addEventListener('input', (e) => {
    const filteredApps = filterApps(e.target.value);
    displayApps(filteredApps);
});

// Initial display of all apps
displayApps(appData);