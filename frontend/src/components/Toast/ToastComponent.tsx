import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const _ToastComponent = () => {
  return (
    <ToastContainer style={{ width: '800px' }}
      position='bottom-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
    />
  )
}

export const ToastComponent = React.memo(_ToastComponent)