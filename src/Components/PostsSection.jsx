import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const ProdSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Ensures only 1 product per slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Show previous/next buttons
    };

    return (
                  
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
                <Slider {...settings}>
                    {products.map((prod) => (
                        <div key={prod.id} >
                            <div className="card border-0 p-2" style={{ height: "400px", overflow: "hidden" }}>
                                <img src={prod.thumbnail} alt={prod.title} className="card-img-top" style={{ height: "65%", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ fontSize: "20px", fontWeight: "600" }}>{prod.title}</h5>
                                    <p className="card-text text-muted">${prod.price}</p>
                                    <p style={{fontSize:'10px'}}>
                                        {prod.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        
    );
};

export default ProdSection;
