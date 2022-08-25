import "./category-preview.styles.scss"
import ProductCard from "../Product-card-component/Product-card-component";
import {ReactComponent as Logo} from "../../assets/buy-discount-shoe-svgrepo-com.svg";
import {Link} from "react-router-dom";

const CategoryPreview = ({title, products})=>{
    return(
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4)
                        .map((product)=>(
                            <ProductCard key={product.id} product={product}/>
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview