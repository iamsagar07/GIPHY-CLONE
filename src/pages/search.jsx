import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GifState } from '../context/giphy-context';
import FilterGif from '../components/FilterGif';
import Gif from '../components/Gif';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([])
  const { fetchGIPHY, filter } = GifState();

  const {query} = useParams();

  const fetchResultGifs = async () => {
    const {data} = await fetchGIPHY.search(query, {
      sort: 'relevant',
      lang: 'en',
      type: filter,
      limit: 20,
    })

    setSearchResult(data);
  }

  useEffect(() => {
    fetchResultGifs();
  },[filter])

  return (
    <div className='my-4'>
       <h2 className='text-5xl pb-3 font-extrabold'>{query}</h2>
       <FilterGif alignLeft={true} />

       {
        searchResult.length > 0 ? (
          <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {searchResult.map((gif,i) => {
          return <Gif gif={gif} key={i} />
        })}
      </div>
        ) : <span>
          No GIFs found for {query}. Try searching for Stickers and Texts
        </span>
       }
    </div>
  )
}

export default SearchPage
