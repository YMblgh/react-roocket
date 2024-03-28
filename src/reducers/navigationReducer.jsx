export default ( navigation , path ) => {
    const newNavigation = navigation.map(( nav ) => {
      if ( nav.to == path ) {
          nav.active = true    
      } else {
          nav.active = false
      }
      return nav
  })
  return newNavigation
  }