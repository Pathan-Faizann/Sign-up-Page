
import './App.css'

function App() {

  return (
    <>
    <div className='body d-flex justify-content-center'>
      <div className='d-flex  main-container'>
        <div className=' first p-4'>
          <div className='d-flex flex-column h-100 justify-content-between align-items-center'>
            <h2 className='m-4 fs-1 logo'>Better <br /> Market</h2>
            <span className='tagline text-start ms-4'>Say hello to global food and beverage producers and suppliers, all in one place</span>
          </div>

        </div> 
        <div className=''>
          <div className='reg-form d-flex justify-content-around flex-column p-2 px-5'>
            <h2 className=''>Let’s get started <br />
            with a few simple steps</h2>
            <form className=' d-flex flex-column justify-content-between' action="">

              <div><label htmlFor="" className='form-label fw-bold'>Email</label>
              <br />
              <input type="email" className='' /></div>
              <div><label htmlFor="" className='form-label fw-bold mt-4'>Full Name</label>
              <br />
              <input type="text" className='' /></div>
              <div><label htmlFor="" className='form-label fw-bold mt-4'>Password</label>
              <br />
              <input type="password" className='' /></div>
              <button onClick={(e)=> e.preventDefault()} className='mt-5 p-4 f-btn'>Sign up</button>
            </form>
            <p className='mt-5 '>By signing up, you agree to our <u>Terms of Service.</u> <br />
Already have an account? <a className='underline'> Log in </a></p>
          </div>

        </div>
      </div>

    </div>
     
    </>
  )
}

export default App
