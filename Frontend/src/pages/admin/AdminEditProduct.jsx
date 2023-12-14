import React from 'react'

const AdminEditProduct = () => {
    
  return (
    <>
      <h2 className='m-4'>Updating product for <span className='text-danger'>'IPhone 15 Pro'</span></h2>
      <div className='d-flex m-4'>
        <div className=''>
            <form>
                <label>Product Name</label>
                <input type="text" className='form-control' placeholder='Enter name of product' />
            </form>
        </div>
        <div>
            <h1>Image preview</h1>
        </div>
      </div>  
    
    </>
  )
}

export default AdminEditProduct
