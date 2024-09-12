import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    document.addEventListener('mousedown', handleClickOutside);
  }
  
  const handleClose = () => {
    setIsOpen(false);
    document.removeEventListener('mousedown', handleClickOutside);
  }

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  }

  return (
    <div className="App">
      <button onClick={handleOpen}>Open Modal Window</button>
      <div className={`overlay ${!isOpen ? 'animated' : ''}`}>
        <div className="modal" ref={modalRef}>
          <span className="icon" onClick={handleClose}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_429_11083)">
                <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#242424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_429_11083">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </span>
          <h2>Modal Content</h2>
          <p>Example text inside the modal.</p>
        </div>
      </div>
    </div>
  )
}

export default App
