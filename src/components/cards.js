import Card from "./card"
import {useState} from 'react'
function Cards({courses,category}){
    const [likedcourses,setlikedcourses]=useState([])
    const allCourses=[]
    // below fun will return all courses in single array
    function getCourses(){
        if(category==="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                     allCourses.push(course)
                })
            })
            return allCourses 
        }
        else{
            return courses[category]
        }
    }
    // object.values() will give only values not key-value pairs;
return(
    <div className="flex flex-wrap justify-center  gap-4 mb-4">
    {
    getCourses().map((course)=>{
       return <Card key={course.id} course={course}  likedcourses={likedcourses} setlikedcourses={setlikedcourses}></Card>
    })}
    </div>
)
}
export default Cards