module.exports = {
  get: async (req, res) => {
    const { name } = req.query;

    if( name == 'fitri') {
      return res.status(200).json({
        status: true,
        message: 'success',
        data: [
          {
            id: 'GhtHVSB12NHGBSGHHw',
            fullname: 'Fitri Andriyani',
            username: 'Fitri07',
            avatar: 'https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL',
            supporter: [
              {
                id: 'GhtHVSB12NHGBSGHHg',
                username: 'Alf'
              },
              {
                id: 'GhtHVSB12NHGBSGHdd',
                username: 'Ali'
              },
              {
                id: 'GhtHVSB12NHGBSGHHs',
                username: 'Aif'
              },
              {
                id: 'GhtHVSB12NHGBSGHtg',
                username: 'lif'
              }
            ]
          }
        ]
      })
    }

    if( name == 'fani') {
      return res.status(200).json({
        status: true,
        message: 'success',
        data: [
          {
            id: 'GhtHVSB12NHGBSGHHt',
            fullname: 'Fani',
            username: 'Fani_1w',
            avatar: 'https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL',
            supporter: [
              {
                id: 'GhtHVSB12NHGBSGHHg',
                username: 'Alf'
              },
              {
                id: 'GhtHVSB12NHGBSGHdd',
                username: 'Ali'
              }
            ]
          }
        ]
      })
    }

    return res.status(404).json({
      status: true,
      message: 'user not found',
      data: null
    })
  }
}