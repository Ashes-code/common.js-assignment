// Assignment
// create an array of at least 3 objects and target them. Create something with them in a new file. Use common.js for export and import.


exports.dataBase = [
  {
    fullname : "Wisdom Ezeh",
    dob : "06 Jan 2007",
    Nationality : "Nigeria",
    phone : +2347072967842,
    hobby : "Reading"
  },
  {
    fullname : "Kelvin James",
    dob : "16 June 2001",
    Nationality : "Nigeria",
    phone : +2347073892252,
    hobby : "Music"
  },
  {
    fullname : "John George",
    dob : "01 Nov 2004",
    Nationality : "Ghana",
    phone : +2335072967842,
    hobby : "Teaching"
  },
  {
    fullname : "Newton Erondu",
    dob : "16 Mar 2000",
    Nationality : "Nigeria",
    phone : +2348074567842,
    hobby : "Networking"
  },
  {
    fullname : "Okoro Favour",
    dob : "31 Dec 2005",
    Nationality : "Cote d'Ivoire",
    phone : +2259172960984,
    hobby : "Hiking"
  },
  {
    fullname : "Dennis Nnaji",
    dob : "31 Mar 2000",
    Nationality : "Nigeria",
    phone : +2349175672312,
    hobby : "Movies"
  },
  {
    fullname : "Nzubehh Jude",
    dob : "1 Dec 2010",
    Nationality : "Cote d'Ivoire",
    phone : +2259172888984,
    hobby : "Sleeping"
  },
  {
    fullname : "Francis Fidelis",
    dob : "22 Aug 2009",
    Nationality : "Nigeria",
    phone : +2348029678932,
    hobby : "Gaming"
  }
];

console.log(this.dataBase[1])
exports.names = this.dataBase.map(item => item.fullname);
exports.nationality = this.dataBase.map(item => item.Nationality);

console.log(this.names)