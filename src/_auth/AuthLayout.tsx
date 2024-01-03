import {Outlet,Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const isAutherized =false
  return (
    <>
      {isAutherized ? (
        <Navigate to="/" />
      ) : (<><section className='flex flex-1 justify-center flex-col py-10'>
          <Outlet />
        </section>
          <img src='../public\assets\images\side-img.svg'
            alt='logo'
            className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'/>
        </>
      )}
    </>
  )
}

export default AuthLayout