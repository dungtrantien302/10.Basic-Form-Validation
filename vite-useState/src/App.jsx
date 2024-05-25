// import { useState, useRef } from 'react'
// import './styles.css'

// export default function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailResult, setEmailResult] = useState([]);
//   const [passwordResult, setPasswordResult] = useState([]);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const checkEmail = (email) => {
//       const errorEmail = [];
//       if (email === '') {
//         errorEmail.push('Email is not blank')
//       }
//       // Không đặt được điều kiện email.length = 0
//       // Cannot assign to read only property 'length' of string ''
//       if (!email.endsWith('@webdevsimplified.com')) {
//         errorEmail.push('Must end in `@webdevsimplified.com`')
//       }
//       // Không đặt được điều kiện email.endsWith('@webdevsimplified.com') = false
//       return errorEmail
//     }
//     checkEmail(email);
//     setEmailResult(checkEmail(email));

//     const checkPassword = (password) => {
//       const errorPassword = [];
//       if (password === '') {
//         errorPassword.push('Password is not blank')
//       }
//       if (password.length < 10) {
//         errorPassword.push('Must Be 10 characters or longer')
//       }
//       if (!password.match(/[a-z]/)) {
//         errorPassword.push('Must include a lowercase letter')
//       }
//       if (!password.match(/[A-Z]/)) {
//         errorPassword.push('Must include an uppercase letter')
//       }
//       if (!password.match(/[0-9]/)) {
//         errorPassword.push('Must include a number')
//       }
//       return errorPassword;
//     }
//     checkPassword(password);
//     setPasswordResult(checkPassword(password));

//     // if (checkEmail(emailRef).length = 0 && checkPassword(passwordRef).length = 0) {
//     //   alert('Success')
//     // }
//   }

//   return (
//     <>
//       <form className="form" onSubmit={onSubmit}>
//         <div className="form-group error">
//           <label className="label" htmlFor="email">Email</label>
//           <input className="input"
//             type="email" id="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)} />
//           <div className="msg"> {emailResult.join(',')}</div>
//         </div>
//         <div className="form-group">
//           <label className="label" htmlFor="password">Password</label>
//           <input
//             className="input"
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             id="password"
//           />
//           <div className="msg"> {passwordResult.join(',')}</div>
//         </div>
//         <button className="btn" type="submit">Submit</button>
//       </form>
//     </>
//   )
// }


import { useState, useRef } from 'react'
import './styles.css'

export default function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailResult, setEmailResult] = useState([]);
  const [passwordResult, setPasswordResult] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const checkEmail = (emailRef) => {
      const errorEmail = [];
      if (emailRef.current.value === '') {
        errorEmail.push('Email is not blank')
      }
      // Không đặt được điều kiện email.length = 0
      // Cannot assign to read only property 'length' of string ''
      if (!emailRef.current.value.endsWith('@webdevsimplified.com')) {
        errorEmail.push('Must end in `@webdevsimplified.com`')
      }
      // Không đặt được điều kiện email.endsWith('@webdevsimplified.com') = false
      return errorEmail
    }
    checkEmail(emailRef);
    setEmailResult(checkEmail(emailRef));

    const checkPassword = (passwordRef) => {
      const errorPassword = [];
      if (passwordRef.current.value === '') {
        errorPassword.push('Password is not blank')
      }
      if (password.current.value.length < 10) {
        errorPassword.push('Must Be 10 characters or longer')
      }
      if (!password.current.value.match(/[a-z]/)) {
        errorPassword.push('Must include a lowercase letter')
      }
      if (!password.current.value.match(/[A-Z]/)) {
        errorPassword.push('Must include an uppercase letter')
      }
      if (!password.current.value.match(/[0-9]/)) {
        errorPassword.push('Must include a number')
      }
      return errorPassword;
    }
    checkPassword(passwordRef);
    setPasswordResult(checkPassword(passwordRef));

    // if (checkEmail(emailRef).length = 0 && checkPassword(passwordRef).length = 0) {
    //   alert('Success')
    // }
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group error">
          <label className="label" htmlFor="email">Email</label>
          <input className="input"
            type="email" id="email"
            ref={emailRef} />
          <div className="msg"> {emailResult.join(',')}</div>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            ref={passwordRef}
            id="password"
          />
          <div className="msg"> {passwordResult.join(',')}</div>
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  )
}