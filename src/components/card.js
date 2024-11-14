import {FcLike,FcLikePlaceholder } from 'react-icons/fc'
// import {useState} from 'react'
import { toast } from 'react-toastify'
function Card({course,likedcourses,setlikedcourses}){
    function likeHandler(){
           if(likedcourses.includes(course.id))
            { // means course is already liked
            setlikedcourses((prev)=>prev.filter((c_id)=>(c_id)!==course.id))
            toast.warning("Like removed")
           }
           else{
            if(likedcourses.length===0){
                setlikedcourses([course.id])
            }
            else{
                setlikedcourses((prev)=>[...prev,course.id])
            }
            toast.success("Liked Successfully")
           }
    }
    return(
        <div className='w-[300px] bg-[#1D1D34] bg-opacity-80 rounded-md overflow-hidden '>
            <div className='relative'>
            <img src={course.image.url} alt={course.image.alt}></img>
            <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-[-12px] flex justify-center items-centre'>
                <button onClick={likeHandler}>
                    {
                        likedcourses.includes(course.id)?
                    <FcLike fontSize="1.75rem"></FcLike>:<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>
                   }
                    </button></div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description.length>100?course.description.substr(0,100)+"...":course.description}</p>
            </div>
        </div>
    )
}
export default Card;