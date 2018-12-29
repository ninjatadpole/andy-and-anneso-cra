// Utility functions for localstorage manipulation

function supportsLocalStorage() {
  try {
    var storage = window.localStorage;
    var x = "__ensure_localstorage__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

function checkStorage() {
  if (!supportsLocalStorage()) {
    throw new Error("Client does not support local storage");
  }
}

/**
 * Get our whole localstorage JSON array, stored under an environment key
 * e.g. Kindeo-production | Kindeo-dev
 */
function getStorageData() {
  let storageData;

  checkStorage();

  try {
    storageData = JSON.parse(localStorage.getItem(window.location.host));
  } catch (e) {
    // JSON parsing failed
    // we'll reset it on the next save
  }

  if (!storageData) {
    storageData = {};
  }

  return storageData;
}

/**
 * Extend our local storage JSON array with the passed in properties
 */
function setStorageData(properties) {
  let storageData = getStorageData();

  storageData = {
    ...storageData,
    ...properties
  };
  localStorage.setItem(window.location.host, JSON.stringify(storageData));
}

export function getStorageValue(readProp) {
  if (readProp) {
    let storageData = getStorageData();
    return storageData[readProp];
  } else {
    throw new Error("No read parameter was provided");
  }
}

export function setStorageValue(updateProp, updateValue) {
  if (updateProp) {
    setStorageData({ [updateProp]: updateValue });
  } else {
    throw new Error("No update parameter was provided");
  }
}
