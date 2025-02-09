const archive = () => {
    return (
        <div>
        <h1>Archive</h1> 
        <div id="entriesarchive">
           </div>
     
           <div id="paginationControls">
             <button id="prevPage" onclick="prevPage()">Previous</button>
             <button id="nextPage" onclick="nextPage()">Next</button>
           </div>
           <p id="paginationInfo"></p>
           <script src="bundle.js"></script>
           </div>
    )
}

export default archive