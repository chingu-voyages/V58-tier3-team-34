import MemberList from '../data/chingu_info.json';

function countCountryMembers(memberList) {
  return memberList.reduce((countriesArray, member) => {
    const country = member['Country name (from Country)'];

    //if country field is empty - just return list
    if (!country) return countriesArray;

    //if country not exist in list (undefined or null) - create with 0
    countriesArray[country] ??= 0;
    countriesArray[country] += 1;

    return countriesArray;
  }, {});
}

function MapPage() {
  const countriesList = countCountryMembers(MemberList);
  return (
    <div>
      <h1>MapPage</h1>
      <ul className='overflow-auto max-h-screen'>
        {Object.keys(countriesList).map((key) => (
          <li key={key}>
            {key}: {countriesList[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapPage;
