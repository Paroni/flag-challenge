export enum Country {
  FINLAND = "Finland",
  SWEDEN = "Sweden",
  NORWAY = "Norway",
  DENMARK = "Denmark",
  ICELAND = "Iceland"
}

export const Countries: Country[] = [
  Country.FINLAND,
  Country.SWEDEN,
  Country.DENMARK,
  Country.NORWAY,
  Country.ICELAND,
]


export const generateCountries = (totalAmount: number, forcedCountry?: Country) => {
  let countriesLeft = Countries;
  if (forcedCountry) {
    countriesLeft = countriesLeft.filter((value) => {
      return value !== forcedCountry
    });
  }

  const countriesToGuess: Country[] = [];

  while (countriesToGuess.length < totalAmount) {
    let newCountry = countriesLeft[Math.floor(Math.random() * countriesLeft.length)];
    countriesToGuess.push(newCountry);
    countriesLeft = countriesLeft.filter(value => value !== newCountry);
  }

  if (forcedCountry) {
    countriesToGuess.pop();
    countriesToGuess.splice(Math.floor(Math.random() * totalAmount - 1),0, forcedCountry)
  }

  return countriesToGuess;
}