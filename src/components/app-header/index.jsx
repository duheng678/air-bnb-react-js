import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      {/* <div className="content"> */}
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
      {/* </div> */}
    </HeaderWrapper>
  )
})

export default AppHeader
