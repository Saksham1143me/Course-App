function Spinner(){
 return(
    <div className="loadingContainer flex flex-col  items-center space-y-2">
       <div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        <p className="loading text-blue-950 text-lg font-semibold">Loading...</p>
    </div>
 )
}
export default Spinner;