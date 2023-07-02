function getUserLocationPromise() {
  if (navigator.geolocation) {
    return new Promise((res, _) => {
      navigator.geolocation.getCurrentPosition(res, handleError);
    }); 

  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

async function getUserLocation() {
  var pos = await getUserLocationPromise();
  
  return {latitude: pos.coords.latitude, longitude: pos.coords.longitude};
}

function handleError(error) {
  let errorStr;
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorStr = 'User denied the request for Geolocation.';
      break;
    case error.POSITION_UNAVAILABLE:
      errorStr = 'Location information is unavailable.';
      break;
    case error.TIMEOUT:
      errorStr = 'The request to get user location timed out.';
      break;
    default:
      errorStr = 'An unknown error occurred.';
  }
  console.error('Error: ' + errorStr);
}

export default getUserLocation;