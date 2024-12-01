import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

const Pagination = () => {
  const {page , totalPages , setPage} = useContext(AppContext)

  function prevHandler() {
    if(page > 1) {
      setPage(page - 1)
    }
  }

  function nextHandler() {
    if(page < totalPages) {
      setPage(page + 1)
    }
  }

  return (
    <div
      style={{
        display:"flex",
        gap:'350px',
        alignItems:"center",
        backgroundColor:"white",
        padding:"10px",
        border:"1px solid grey",
        borderRadius:'5px',
        position:'sticky',
        bottom:'0px',
        justifyContent:'center'
      }}
    >

      <div>
      {
          page === 1 ? 
          (
            <div style={{width:'20vw'}}>
              <button style={{
                  padding:"5px" , border:"1px solid black" , width:"10vw" , margin:"5px 10px" , borderRadius:'5px',
                }}
                onClick={nextHandler}
              >
                Next
              </button>
            </div>
          ) : 
          (
            page === totalPages ?
            (
              <div style={{width:'20vw'}}>
                  <button style={{
                    padding:"5px" , border:"1px solid black" , width:"10vw" , margin:"5px 10px" , borderRadius:'5px',
                  }}
                    onClick={prevHandler}
                  >
                    Previous
                  </button>
              </div>
              
            ) : 
            (
              <div> 
                  <button style={{
                      padding:"5px" , border:"1px solid black" , width:"10vw" , margin:"5px" , borderRadius:'5px'
                    }}
                    onClick={prevHandler}
                  >
                    Previous
                  </button>
    
                  <button style={{
                      padding:"5px" , border:"1px solid black" , width:"10vw" , margin:"5px" , borderRadius:'5px'
                    }}
                    onClick={nextHandler}
                  >
                      Next
                  </button>
              </div>
            )
          )
        }
      </div>

      <div>
        <p>Page {page} of {totalPages}</p>
      </div>

    </div>
  )
}

export default Pagination