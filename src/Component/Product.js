import React from 'react';
import { Table, Panel } from 'react-bootstrap';
import './Account.css';
import Data from '../Utils/Data';
import queryString from 'query-string';
import $ from 'jquery';


class Product extends React.Component {
    constructor(props) {
        super(props)
        this.onDetail=this.onDetail.bind(this);
    }

    onDetail(event){
        let Id = $(event.target).parseInt().attr("id");
        window.location.href="/productdetail?id=" +Id;
    }
    buildProductList() {
        let ProductList = Data.getProductList();
        let _productList = [];

        for (let i in ProductList) {
            _productList.push(
                <tr key={i} id={ProductList[i].id} onDoubleClick={this.onDetail}>
                    <th>{ parseInt(i) + 1}</th>
                    <th>{ProductList[i].name}</th>
                    <th>{ProductList[i].type}</th>
                    <th>{ProductList[i].price}</th>
                </tr>
            )
        }
        return _productList;
    }
    render() {
        let _productList = this.buildProductList();
        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Product Manager</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Stt</th>
                                    <th>name</th>
                                    <th>type</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {_productList}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}
export default Product;