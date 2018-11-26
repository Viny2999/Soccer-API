exports.getMain = (req, res) => {
    res.send({ 
      apiName: 'Soccer API', 
      createIn: '25-11-2018', 
      endpoints: [
        { 
          getAllTime: 'https://soccer-devmedia.herokuapp.com/api/time/all',
          getOneTimePerID: 'https://soccer-devmedia.herokuapp.com/api/time/<ID>',
          getOneTimePerName: 'https://soccer-devmedia.herokuapp.com/api/time/?nome=<NAME>',
          postTime: 'https://soccer-devmedia.herokuapp.com/api/time/',
          putTime: 'https://soccer-devmedia.herokuapp.com/api/time/<ID>',
          deleteTime: 'https://soccer-devmedia.herokuapp.com/api/time/?nome=<NAME>'
        },
        { 
          getAllPlacar: 'https://soccer-devmedia.herokuapp.com/api/placar/all',
          getOnePlacarPerID: 'https://soccer-devmedia.herokuapp.com/api/placar/<ID>',
          getOnePlacarPerName: 'https://soccer-devmedia.herokuapp.com/api/placar/?name=<NAME>',
          postPlacar: 'https://soccer-devmedia.herokuapp.com/api/placar/',
          putPlacar: 'https://soccer-devmedia.herokuapp.com/api/placar/<ID>',
          deletePlacar: 'https://soccer-devmedia.herokuapp.com/api/placar/<ID>'
        }
      ]
    });
  }
  