import React, { useState, useEffect } from 'react'

import { Loader, Card, FormField } from '../components'

const RenderCards = ({ data, title }) => {
  // check if we have data. If we do, render the images/cards (post = image) while passing all of the post data to each individual card. Else just return the title.
  if(data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
      {title}
    </h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)

  const [searchText, setSearchText] = useState('')


  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse the latest visually stunning creations & collections from our imaginative community members
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>
      
      <div className="mt-10">
        {/* check if we are loading. If so render a div with the loader component */}
        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <>
            {/* check if we have a search term. If we do, render an h2 */}
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for 
                  <span className="text-[#222328]">
                    {searchText}
                  </span>
              </h2>
            )}
            
            {/* render images */}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {/* check if search text exits */}
              {/* if we are not searching for something just render all the posts */}
              {searchText ? (
                <RenderCards 
                  data={[]}
                  title="No search results found"
                />                
              ) : (           
                <RenderCards 
                  data={[]}
                  title="No posts found"
                />
              )}              
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home