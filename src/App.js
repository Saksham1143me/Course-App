import './App.css';
import Cards from './components/cards';
import { filterData,apiUrl } from './data';
import Navbar from './components/nav';
import { toast } from 'react-toastify';
import {useEffect,useState} from "react"
import Filter from './components/filter';
import Spinner from './components/spiner';
function App() {
  const [courses,setCourses]=useState(null)
  const [loading,setLoading]=useState(true)
  const [category, setCategory] = useState('All');
     async function fetchdata(){
      setLoading(true)
         try {
          const res=await fetch(apiUrl)
          const output=await res.json()
          console.log(output)
          setCourses(output.data)

        } catch (err) {
          toast.error('Something went wrong')
         }
         setLoading(false)
        }
       
       useEffect(()=>{
        fetchdata()
       },[])
 

  return (
    <div className='flex min-h-screen flex-col bg-[#40445c]'>
     <Navbar></Navbar>
     <div className='bg-[#40445c]'>
     <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
    <div
    className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center  items-center min-h-[50vh]'
    >{loading ?(<Spinner></Spinner>):(<Cards category={category} courses={courses} ></Cards>)}
    </div>
    </div>
    </div>
  );
}

export default App;
