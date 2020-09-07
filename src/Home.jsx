import React from 'react'
import banner from './images/banner.svg';
const Home  = ()=>{
    return(
        <>
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto order-2 order-md-1 first">
                        <h3>
                            <span className="text-warning font-wight-bold shadow">Dont Worry!</span>
                            <span className="text-primary shadow font-weight-bold">
                                Everything
                            </span> is here.</h3>
                            <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Corporis explicabo ipsum magni, similique quisquam, odio commodi ea, tempora
                            eius soluta earum animi amet illum deserunt mollitia. Est, ratione. Unde, 
                            consectetur?</p>
                            <a href="" className="btn btn-outline-primary font-weight-bold">Get Started</a>
                    </div>
                    <div className="col-md-6 col-10 mx-auto banner_img m-4 order-1">
                        <img src={banner} alt="mypic"  className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;