module.exports = {
  get: async (req, res) => {
    return res.status(200).json({
      status: true,
      message: 'success',
      data: [
        {
          id: 'GhtHVSB12NHGBSGHHt',
          user: {
            name: 'Fitri',
            avatar: 'https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL'
          },
          category: 'Finance',
          caption: 'Lorem ipsum dolor sit amet.',
          photos: [
            'https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL',
            'https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL'
          ],
          is_liked: false,
          cheers_count: 20,
          comments_count: 10,
          date_time: '2019-08-24T14:15:22Z'
        },
        {
          id: 'GhtHVSB12NHGBSGHHg',
          user: {
            name: 'Fitri A',
            avatar: 'https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL'
          },
          category: 'Finance',
          caption: 'Lorem ipsum dolor sit amet.',
          photos: ['https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL'],
          is_liked: false,
          cheers_count: 20,
          comments_count: 10,
          date_time: '2019-08-24T14:15:22Z'
        }
      ]
    })
  }
}