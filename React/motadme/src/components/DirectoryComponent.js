import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null
        };
    }

    render() {
        const directory = this.props.products.map(products => {
            return (
                <div key={products.id} className = "col-sm-8">
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">
                                {products.name}
                            </CardTitle>
                            <CardText className="text">
                                {products.description}
                            </CardText>
                        </CardBody>
                        <CardImg top src={products.image}  alt={products.name}/>
                    </Card>
                </div>
            );
        });
    
        return (
            <div className="container">
                <div className="row d-flex">
                    {directory}
                </div>
            </div>
        );
    }

    }

export default Directory;