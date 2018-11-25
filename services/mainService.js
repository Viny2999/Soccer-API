exports.getMain = (req, res) => {
    res.send({ 
      apiName: 'Soccer API', 
      createIn: '25-11-2018', 
      endpoints: [
        { 
          getAllTime: 'https://soccer-api.herokuapp.com/api/time/all',
          getOneTimePerID: 'https://soccer-api.herokuapp.com/api/time/<ID>',
          getOneTimePerName: 'https://soccer-api.herokuapp.com/api/time/?nome=<NAME>',
          postTime: 'https://soccer-api.herokuapp.com/api/time/',
          putTime: 'https://soccer-api.herokuapp.com/api/time/<ID>',
          deleteTime: 'https://soccer-api.herokuapp.com/api/time/?nome=<NAME>'
        },
        { 
          getAllPlacar: 'https://soccer-api.herokuapp.com/api/placar/all',
          getOnePlacarPerID: 'https://soccer-api.herokuapp.com/api/placar/<ID>',
          getOnePlacarPerName: 'https://soccer-api.herokuapp.com/api/placar/?name=<NAME>',
          postPlacar: 'https://soccer-api.herokuapp.com/api/placar/',
          putPlacar: 'https://soccer-api.herokuapp.com/api/placar/<ID>',
          deletePlacar: 'https://soccer-api.herokuapp.com/api/placar/<ID>'
        }
      ]
    });
  }
  