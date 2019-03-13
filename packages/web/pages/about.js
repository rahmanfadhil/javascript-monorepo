import React from 'react'
import Link from 'next/link'

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>home page</a>
      </Link>
    </div>
  )
}

export default AboutPage
