import React from 'react'
import NavBar from './NavBar'

const AddBook = () => {
  return (
    <div>
        <NavBar/>
      <div classNameName="container" style={{padding:10,margin:50}}>
        <h1 style={{marginBottom:50}}>Add Books</h1>
        <div className="row g-3 ">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Book Code/ISBN</label>
                        <input type="text" className="form-control"></input>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Title</label>
                        <input type="text" className="form-control"></input>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Author</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Publisher</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Category/Genre</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <label for="" className="form-label"></label>
                        <button className="btn btn-primary">Submit</button>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddBook