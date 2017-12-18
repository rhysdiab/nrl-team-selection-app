const initialState = {
  auth: {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  },
  teams: {
    team: [
      'Matt Dufty',
      'Jason Nightingale',
      'Tim Lafai',
      'Euan Aitkin',
      'Nene Mcdonald',
      'Gareth Widdop',
      'Ben Hunt',
      'Paul Vaughen',
      'Cameron Mcinnes',
      'James Graham',
      'Tyson Frizell',
      'Joel Thompson',
      'Jack de Belin',
      'Jai Field',
      'Tariq Sims',
      'Leeson Ah Mau',
      'Kurt Mann',
      'Luciano Leilua',
      'Bryan Lawrie',
      'Mitchell Allgood',
      'Patrick Herbert',
      'Darren Nicholls',
      'Hame Sele',
      'Jacob Host',
      'Zac Lomax',
      'Jackson Ford',
      'Reuben Garrick',
      'Jeremy Latimore',
      'Jordan Pereira',
      'Josh Kerr',
      'Reece Robson'



    ],
    key: 'temp'
  },
  users: {
    firstUser: {
      displayName: 'Bill Murray',
      email: 'bill@example.com',
      photoURL: 'http://www.fillmurray.com/200/200'
    },
    secondUser: {
      displayName: 'Place Kitten',
      email: 'kitten@example.com',
      photoURL: 'https://placekitten.com/g/200/200'
    }
  }
};

export default initialState;
