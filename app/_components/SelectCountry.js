import { getCountries } from "@/app/_libs/data-service";

async function SelectCountry() {
  const countries = await getCountries();
  const sortedCountries = countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
  return sortedCountries.map((country) => (
    <option key={country.name?.common} value={country.name?.common}>
      {country.name?.common}
    </option>
  ));
}

export default SelectCountry;
