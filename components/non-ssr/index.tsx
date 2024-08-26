import dynamic from 'next/dynamic'
import React from 'react'

const NonSSR = ({ children }: { children: React.ReactNode }) => (
    <React.Fragment>{children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NonSSR), {
    ssr: false
})