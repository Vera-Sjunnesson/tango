import React from 'react'
import { AllPages } from 'components/pages/AllPages'
import { GlobalStyles } from 'components/lib/GlobalStyles'
import { useMediaQuery } from 'react-responsive'

export const App = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' })
  return (
    <div>
      {isDesktop && (
        <>
          <GlobalStyles />
          <AllPages />
        </>
      )}
    </div>
  )
}
