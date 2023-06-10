import { useEffect, useState } from 'react'
import Navabar from './components/Navbar/Navabar'
import './App.css'
import Home from './pages/Homepage/Home'

function App() {
  
  const [news, setNews] = useState({

        searchText: '',
        amount: 100,
        topics: [],
        minDate:'',
        maxDate:'',
        active: true,
        // Sort fetched data
        order: '',
        container: [],

  });

  console.log(news);

  useEffect(() => {

    if(news.active){

      getNews();

    }
      

  });


  const getNews = async () => {

      // Pass parameters from state to the backend url dinamically 
      let obj = news.searchText;
      let from = news.minDate;
      let to = news.maxDate;
      let amount = news.amount;

      if (obj) { // this will never be `undefined`
        
        // create query parameters
        const params = new URLSearchParams({ obj, from, to, amount });
        console.log(params)
        // send the request
        const res = await fetch(`https://news-web-app-backend.onrender.com/newsCreate?${params}`);
        
        if(!res.ok){
        
            throw new Error(`${res.status}: ${await res.text()}`) ;
        
        }
    
        const data = await res.json();
        console.log(data)
        setNews({...news, topics: data.articles, active: false});
        
        
        
      }else{

        const res = await fetch(`https://news-web-app-backend.onrender.com/newsCreate?obj=eu`);
        
        if(!res.ok){
        
            throw new Error(`${res.status}: ${await res.text()}`) ;
        
        }
    
        const data = await res.json();
        console.log(data)
        setNews({...news, topics: data.articles, active: false});


      }


  }

  const onTextChange = async (e) => {

    setNews({...news ,searchText: e.target.value, active: true});

  }

  const sortThings = (e) => {
      
  
        // Check if the option is old and sort the data ascending and change the state to ascendend
        if(e.target.value === 'old'){
              
            
            // Sort asc
            const sortAsc = () => news.topics.sort((a,b)=>{
              return new Date(a.publishedAt) - new Date(b.publishedAt);
            })

            sortAsc();
                
            // Sort desc
            setNews({...news, order: 'desc'});
            

        }else{
              
              
            const sortDesc = () => news.topics.sort((a,b)=>{
              return new Date(b.publishedAt) - new Date(a.publishedAt);
            })

            sortDesc();

              
            setNews({...news, order: 'asc'});
            
            
        }
    
  }

  const filterThings = (e) => {

      
  
    // Try to call the api from the navbar with the min and max from the filter updated
    // It works only if you filter first and then search for something
    
    if(e.target.name == 'from'){
      
      e.stopPropagation();
      console.log(e.target.value);
      setNews({...news, minDate: e.target.value});
      
  
    }else{

      e.stopPropagation();
      console.log(e.target.value);
      setNews({...news, maxDate: e.target.value, active: true});


    }
    
  
  
  }

  return (
    <>
     <Navabar />
     <Home minDate={news.minDate} maxDate={news.maxDate} data={news.topics} filterThings={filterThings} sortThings={sortThings} onTextChange={onTextChange} text={news.searchText}/>
    </>
  )
}

export default App
