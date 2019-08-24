exports.up = async (knex) => {
  const users = [
    { username: 'admin', password: 'admin' },
    { username: 'animefan', password: 'password' },
    { username: 'spacephotos', password: '1234' },
    { username: 'trains', password: '1qazxsw2' },
    { username: 'gameswithfriends', password: 'pa55w0rd' },
    { username: 'doodles', password: 'securepassword' },
    { username: 'bitcoin', password: 'E69&BcPqfhGWxWfn@i32V' },
    { username: 'travelguide', password: 'travel' },
    { username: 'medievaltimes', password: 'password' },
    { username: 'covfefe', password: '123456' },
    { username: 'mylife', password: '123456' },
    { username: 'somedude', password: '123456' },
    { username: 'ilikeyou', password: '123456' },
    { username: 'joe', password: '123456' },
    { username: 'dudu', password: '123456' },
    { username: 'milson', password: '123456' },
    { username: 'wilson', password: '123456' },
  ]

  const pins = [
    { username: 'trains', url: 'https://images.unsplash.com/photo-1465487862947-ded619a2a9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' },
    { username: 'spacephotos', url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80' },
    { username: 'covfefe', url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' },
    { username: 'doodles', url: 'https://images.unsplash.com/photo-1551229848-24af7e52077a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=767&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80' },
    { username: 'spacephotos', url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=730&q=80' },
    { username: 'medievaltimes', url: 'https://images.unsplash.com/photo-1532270089381-9f7fe1b4eeef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80' },
    { username: 'medievaltimes', url: 'https://images.unsplash.com/photo-1536095864675-3f4a97610218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'trains', url: 'https://images.unsplash.com/photo-1486915585284-e6cb5cd1ec87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
    { username: 'doodles', url: 'https://images.unsplash.com/photo-1564585447174-9ef53f9447e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=616&q=80' },
    { username: 'spacephotos', url: 'https://i.pinimg.com/736x/62/82/92/6282928acfe184ba0db8b0e159709ef9--space-exploration-hunk-garrett-aesthetic.jpg' },
    { username: 'spacephotos', url: 'https://wallpapersinbox.files.wordpress.com/2012/08/hd-space-9.jpg' },
    { username: 'animefan', url: 'https://i.pinimg.com/736x/06/af/a5/06afa52d2077fb4370aebdafb8936930.jpg' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=851&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=734&q=80' },
    { username: 'covfefe', url: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1558447334-e3fa32df6d22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=833&q=80' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1556374002-a892c2598e99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'doodles', url: 'https://images.unsplash.com/photo-1543227612-f30b954dec90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { username: 'animefan', url: 'https://i.pinimg.com/736x/04/48/0e/04480ed717cbd3679a515f783b1583cf.jpg' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80' },
    { username: 'medievaltimes', url: 'https://images.unsplash.com/photo-1544939514-aa98d908bc47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'medievaltimes', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80' },
    { username: 'spacephotos', url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=734&q=80' },
    { username: 'trains', url: 'https://images.unsplash.com/photo-1434871619871-1f315a50efba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1499062918700-389fa905494e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' },
    { username: 'animefan', url: 'https://i.ytimg.com/vi/fhUSSKLv3dc/hqdefault.jpg' },
    { username: 'covfefe', url: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=678&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=814&q=80' },
    { username: 'covfefe', url: 'https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=416&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=887&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'spacephotos', url: 'http://tumblrchase.com/img/bg/84.gif' },
    { username: 'animefan', url: 'https://static.zerochan.net/Yuna.Miyami.full.13641.jpg' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' },
    { username: 'trains', url: 'https://images.unsplash.com/photo-1456797429698-d3c9eb745239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80' },
    { username: 'medievaltimes', url: 'https://images.unsplash.com/photo-1524397057410-1e775ed476f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' },
    { username: 'animefan', url: 'https://i.ytimg.com/vi/qImUihjYZA0/hqdefault.jpg' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1490380169520-0a4b88d52565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'bitcoin', url: 'https://images.unsplash.com/photo-1543699539-33a389c5dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&auto=format&fit=crop&w=649&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=808&q=80' },
    { username: 'trains', url: 'https://images.unsplash.com/photo-1441040744088-a70b8213d4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80' },
    { username: 'spacephotos', url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1562101660-01a86ab85b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80' },
    { username: 'animefan', url: 'http://idesigniphone.net/wallpapers/04930.jpg' },
    { username: 'gameswithfriends', url: 'https://images.unsplash.com/photo-1511213966740-24d719a0a814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=550&q=80' },
    { username: 'covfefe', url: 'https://images.unsplash.com/photo-1530032582480-edd739014c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=771&q=80' },
    { username: 'spacephotos', url: 'http://3.bp.blogspot.com/-V-3ZxPuDQas/Uea09txI9iI/AAAAAAAAFpc/f7Iwu8NveDw/s1600/Real%2BOuter%2BSpace%2BPictures-702210.jpg' },
    { username: 'trains', url: 'https://images.unsplash.com/photo-1495313196544-7d1adf4e628f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' },
    { username: 'spacephotos', url: 'http://idesigniphone.net/wallpapers/53978.jpg' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80' },
    { username: 'trains', url: 'https://images.unsplash.com/21/rail.JPG?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80' },
    { username: 'covfefe', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=734&q=80' },
    { username: 'travelguide', url: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=851&q=80' },
    { username: 'spacephotos', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?&w=900&q=80' },
  ]

  function uniform (from, to) {
    return Math.floor(from + Math.random() * (to - from))
  }

  function choose (array, n) {
    const toChoose = shuffle([...array])
    return toChoose.slice(0, n)
  }

  function shuffle (array) {
    let currentIndex = array.length
    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      const temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  const likes = pins.map((pin, index) => {
    return {
      pinId: index + 1,
      users: choose(users, uniform(0, users.length))
    }
  }).flatMap(
    ({ pinId, users }) => users.map(user => ({ username: user.username, pinId }))
  )

  await knex.batchInsert('users', users)
  await knex.batchInsert('pins', pins)
  await knex.batchInsert('likes', likes)
}

exports.down = async (knex) => {
  await knex('users').delete()
  await knex('pins').delete()
  await knex('likes').delete()
}
