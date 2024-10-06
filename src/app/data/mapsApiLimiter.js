const MAX_REQUESTS_PER_DAY = 1000; 
let apiRequestCount = 0;

// Function to increment request count
export const incrementRequestCount = () => {
  apiRequestCount++;
  localStorage.setItem('apiRequestCount', apiRequestCount);
};

// Function to check if we can make an API request
export const canMakeApiRequest = () => {
  const storedCount = localStorage.getItem('apiRequestCount');
  apiRequestCount = storedCount ? parseInt(storedCount, 10) : apiRequestCount;

  if (apiRequestCount < MAX_REQUESTS_PER_DAY) {
    return true;
  } else {
    console.warn('API request limit reached for today.');
    return false;
  }
};

// Function to reset the request count (typically at midnight)
export const resetRequestCount = () => {
  apiRequestCount = 0;
  localStorage.setItem('apiRequestCount', 0);
};

