const initialState = {
  auth: {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  },
  team: {
    players: {
        1: 'Matt Dufty',
        2: 'Jason Nightingale',
        3: 'Tim Lafai',
        4: 'Euan Aitkin',
        5: 'Nene Mcdonald',
        6: 'Gareth Widdop',
        7: 'Ben Hunt',
        8: 'Paul Vaughen',
        9: 'Cameron Mcinnes',
        10: 'James Graham',
        11: 'Tyson Frizell',
        12: 'Joel Thompson',
        13: 'Jack Debelin',
        14: 'Jai Field',
        15: 'Tariq Sims',
        16: 'Leeson Ah Mau',
        17: 'Bryan Lawrie'
      },
      timeStamp: Date.now() - 600,
      uid: 'firstUser'
    },
  users: {
    'firstUser': {
      displayName: 'Bill Murray',
      email: 'bill@example.com',
      photoURL: 'http://www.fillmurray.com/200/200'
    },
    'secondUser': {
      displayName: 'Place Kitten',
      email: 'kitten@example.com',
      photoURL: 'https://placekitten.com/g/200/200'
    }
  },
  newMessage: ''
};

export default initialState;
