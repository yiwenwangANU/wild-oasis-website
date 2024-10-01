import { getCountries } from "@/app/_libs/data-service";

async function SelectCountry() {
  const countries = await getCountries();
  return countries.map((country) => (
    <option key={country.name?.common} value={country.name?.common}>
      {country.name?.common}
    </option>
  ));
}

export default SelectCountry;
