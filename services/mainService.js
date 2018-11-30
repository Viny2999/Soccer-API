exports.getMain = (req, res) => {
    res.send({ 
      apiName: 'Soccer API', 
      createIn: '25-11-2018', 
      endpoints: [
        { 
          GET_TIME: 'https://soccer-devmedia.herokuapp.com/api/time',
          GET_TIME_ID: 'https://soccer-devmedia.herokuapp.com/api/time/<ID>',
          GET_TIME_QUERY_STRING: 'https://soccer-devmedia.herokuapp.com/api/time/?nome=<NAME>',
          POST_TIME: 'https://soccer-devmedia.herokuapp.com/api/time',
          PUT_TIME: 'https://soccer-devmedia.herokuapp.com/api/time/<ID>',
          DELETE_TIME: 'https://soccer-devmedia.herokuapp.com/api/time/<ID>'
        },
        { 
          GET_PLACAR: 'https://soccer-devmedia.herokuapp.com/api/placar',
          GET_PLACAR_ID: 'https://soccer-devmedia.herokuapp.com/api/placar/<ID>',
          GET_PLACAR_QUERY_STRING: 'https://soccer-devmedia.herokuapp.com/api/placar/?nome=<NAME>',
          POST_PLACAR: 'https://soccer-devmedia.herokuapp.com/api/placar',
          PUT_PLACAR: 'https://soccer-devmedia.herokuapp.com/api/placar/<ID>',
          DELETE_PLACAR: 'https://soccer-devmedia.herokuapp.com/api/placar/<ID>'
        }
      ]
    });
  }
  