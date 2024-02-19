import React, { useState } from 'react'
// Assuming the import path is correct
import googleAuthBtn from '../../../../assets/google_auth_btn.svg'

interface AuthModalProps {
  show: boolean
  onHide: () => void
}

export const AuthModal: React.FC<AuthModalProps> = ({ show, onHide }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailAuth = () => {}
  const handleGoogleAuth = () => {}

  return (
    <div
      className={`bg-opacity-20 bg-yellow-300 fixed top-0 left-0 w-full h-full ${
        show ? 'block' : 'hidden'
      }`}
      onClick={onHide}
    >
      <div className="modal-content relative bg-custom-green w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto p-6 mt-4">
        <h2 className="text-2xl text-center mb-6">Welcome</h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-between mb-4">
          <button
            className="bg-yellow-500 bg-opacity-90 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline mb-4"
            onClick={handleEmailAuth}
          >
            Log In
          </button>
          <div className="my-2 text-gray-600">or</div>
          <button className="" onClick={handleGoogleAuth}>
            <img src={googleAuthBtn} alt="Google Login" className="w-full" />
          </button>
        </div>
      </div>
    </div>
  )
}

