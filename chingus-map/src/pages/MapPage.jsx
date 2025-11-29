import Map from '../components/Map';
import MemberList from '../data/chingu_info.json';
import coords from 'country-coords';

//Get coordinates of country
function getCountryCoordinates(countryCode) {
  if (!countryCode) return null;

  const result = coords.find((c) => c.country === countryCode);
  if (!result) return null;

  return {
    lat: result.latitude,
    lng: result.longitude,
  };
}

//Count of countries and members
function countCountryMembers(memberList) {
  const coutriesList = memberList.reduce((countriesArray, member) => {
    const countryName = member['Country name (from Country)'];
    const countryCode = member['Country Code'];

    if (!countryName) return countriesArray;

    //Add country if it's not exist in List
    if (!countriesArray[countryName]) {
      let coords = getCountryCoordinates(countryCode);

      //Add coordinates for Kosovo
      if (countryCode === 'XK') {
        coords = { lat: 42.67, lng: 21.16 };
      }

      countriesArray[countryName] = {
        country: countryName,
        code: countryCode,
        members: 0,
        lat: coords?.lat,
        lng: coords?.lng,
      };
    }

    //Count members
    countriesArray[countryName].members += 1;

    return countriesArray;
  }, {});

  return Object.values(coutriesList);
}

function MapPage() {
  const countriesList = countCountryMembers(MemberList);
  return (
    <div>
      <h1>MapPage</h1>
      <Map countries={countriesList} />
    </div>
  );
}

export default MapPage;
