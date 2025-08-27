import React from 'react'

const SectionWrapper = (
    {children}: {children: React.ReactNode}
) => {
  return (
    <section className='container mx-auto px-2'>
        {children}
    </section>
  )
}

export default SectionWrapper