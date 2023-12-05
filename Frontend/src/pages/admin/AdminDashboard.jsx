import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='m-4'>
                <div className='d-flex justify-content-between'>
                    <h2>Admin Dashboard</h2>

                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>


                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create new product!</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <label>Product Name</label>
                                        <input type="text" className='form-control mb-2' placeholder='Enter product name' />

                                        <label>Product Price</label>
                                        <input type="number" className='form-control mb-2' placeholder='Enter product price' />

                                        <label>Product Category</label>
                                        <select className='form-control mb-2'>
                                            <option value="Flower">Flower</option>
                                            <option value="Cake">Cake</option>
                                            <option value="Gift">Gift</option>
                                        </select>

                                        <label>Product Description</label>
                                        <textarea name="" id="" cols="3" rows="3" className='form-control' placeholder='Enter description'></textarea>

                                        <label>Product Image</label>
                                        <input type="file" className='form-control mb-2' />

                                        

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table mt-2">
                    <thead className="table-dark">
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Product Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="https://th.bing.com/th/id/OIP.JPJVgSoqR2dRQ4VcsD_BsQHaEK?rs=1&pid=ImgDetMain" width={'40'} height={'40'} alt="" />
                            </td>
                            <td>Merigold</td>
                            <td>360</td>
                            <td>Flower</td>
                            <td>Flower for decoration</td>
                            <td>
                                <div className='btn-group' role='group'>
                                    <button className='btn btn-success'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AdminDashboard
