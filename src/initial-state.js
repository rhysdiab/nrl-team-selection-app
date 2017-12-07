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
      'Jack Debelin',
      'Jai Field',
      'Tariq Sims',
      'Leeson Ah Mau',
      'Bryan Lawrie'
    ]
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
