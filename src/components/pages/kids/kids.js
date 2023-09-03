import React from 'react'
import { Link } from 'react-router-dom'
import './kids.css'

export const Kids = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

    return (
        <>
            <section className='kids-hero'>
                <a className='kids-hero-img' href='#!'>
                    <div>
                        <p className='kids-hero-p1'>Warm Clothes for the weather</p>
                        <p>With the most comfortable materials</p>
                        <a href='#!'>Buy Now</a>
                    </div>
                </a>
            </section>

            <section className="gender-gate-box">
                <h2>Search By Category</h2>
                <div className="gender-gate-row">
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40150.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">T-Shirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40175.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Shirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36835.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Pants</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40167.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">jackets</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40147.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">sweatshirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40166.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">joggers</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35074.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Swimsuits</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34293.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Underwear</a></label>
                        </div>
                    </div>
                </div>
            </section>

            <section className="man-feature-box">
                <div>
                    <h2>New Arrivals</h2>
                </div>
                <div className="man-feature-row">
                    <div><a href="#!"><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40149.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></a>
                        <a href="#!">Printed Shirt</a>
                    </div>
                    <div><a href="#!"><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40153.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></a>
                        <a href="#!">Short Sleeve Printed T-Shirt</a>
                    </div>
                    <div><a href="#!"><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40165.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></a>
                        <a href="#!">Black Cargo</a>
                    </div>
                    <div><a href="#!"><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40169.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></a>
                        <a href="#!">Bright Red vest</a>
                    </div>
                </div>
            </section>

            <section className='kids-pro'>
                <div>
                    <h2>More Clothes</h2>
                </div>
                <div className="kids-pro-row">
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40151.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40150.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40166.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Pants</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40147.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40171.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40153.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40152.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40173.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shorts</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_38341.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shorts</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40146.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40160.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40158.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                </div>
            </section>
        </>
    )
}