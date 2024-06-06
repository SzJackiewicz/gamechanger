/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const H1 = (props: any) => (
  <h1
    style={{ color: '#d8e6fb', fontSize: 'clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)', marginBottom: '0.5em' }}
    {...props}
  />
)
const H2 = (props: any) => (
  <h2
    style={{ color: '#d8e6fb', marginBottom: '0.5em', fontSize: 'clamp(16px, 0.61vi + 12.58px, 21.33px)', marginTop: '1em' }}
    {...props}
  />
)
const P = (props: any) => (
  <p
    style={{ color: '#94a9c9', lineHeight: '1.6', fontSize: 'clamp(16px, 0.61vi + 10.58px, 18.33px)' }}
    {...props}
  />
)

const Li = (props: any) => (
  <li
    style={{
      color: '#94a9c9',
      lineHeight: '1.6',
      fontSize: 'clamp(16px, 0.61vi + 10.58px, 18.33px)',
      listStyleType: 'disc',
      marginLeft: '1em',
      marginBottom: '0.5em',
      marginTop: '0.5em',
    }}
    {...props}
  />
)

export { H1, H2, P, Li }
