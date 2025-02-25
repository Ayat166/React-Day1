import './App.css'

function App() {
  // Sign up form contains:
  // Name, email, password, gender(radio button), sign up button
  return (
    <div>
      <form>
        <h2>
          Sign Up
        </h2>
        <div className='form-group' htmlFor="name">
          <label >Name</label>
          <br></br>
          <input type='text' id='name' className='form-control' name='name'></input>
        </div>
        <div className='form-group' htmlFor='email'>
          <label>Email</label>
          <br></br>
          <input type='email' id='email' className='form-control' name='email'></input>
        </div>
        <div className='form-group' htmlFor='pass' >
          <label>password</label>
          <br></br>
          <input type='password' id='pass' className='form-control' name='pass'></input>
        </div>
        <div>
          <div className='form-check'>
          <input className='form-check-input' type='radio' name='gender' value="male" id='male' defaultChecked ></input>
          <label className='form-check-label' htmlFor='male'>Male</label>
          </div>
          <div className='form-check'>
          <input className='form-check-input' type='radio' name='gender' id="female" value="female"></input>
          <label className='form-check-label' htmlFor='female'>Female</label>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>

  )
}

export default App
