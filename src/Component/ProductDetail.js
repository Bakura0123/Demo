// import ProductDetail from './ProductDetail';
import React from 'react';
import queryString from 'query-string';
import Data from "../Utils/Data";

class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    componentDidMount(){

    }
    buildProductDetail(){
        let ProductDetail=[];
        let product=this.getProduct();
        if(product != null){
            ProductDetail.push(
                <div>
                    <span>Name:{product.name}</span>
                    <span>Price:{product.price}</span>
                    <span>Description:{product.description}</span>
                    <span></span>
                </div>
            );
        }
        return ProductDetail;
    }


    getProduct(){
        let product = null;
        if(this.state.Id != null){
            product= Data.getProduct(this.state.Id);
        }
        return product;
    }
    getIdFromQueryString(){
        let Obj =null;
        if(this.props.location && this.props.location.search){
            Obj= queryString.parse(this.props.location.search);
        }
        if(Obj.id){
            Obj.id=parseInt(Obj.id);
        }
        return Obj.id || null;
    }
    render(){
        let ProductDetail=this.buildProductDetail();
        return(
            <div>Hello anh em</div>
        )
    }
}
export default ProductDetail;
