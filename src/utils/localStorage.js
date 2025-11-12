const getInstalledApps = () => {
    const installedApps = localStorage.getItem('installedApps');
    return installedApps ? JSON.parse(installedApps) : [];
};

const addInstalledApp = (appId) => {
    const installedApps = getInstalledApps();
    if (!installedApps.includes(appId)) {
        installedApps.push(appId);
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
    }
};

const removeInstalledApp = (appId) => {
    let installedApps = getInstalledApps();
    installedApps = installedApps.filter(id => id !== appId);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
};

export { getInstalledApps, addInstalledApp, removeInstalledApp };
