import React from 'react';
import Header from './header';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }
    addToCartFunc(name, price) {
        let { item } = this.state
        item.push({ name, price })
        this.setState({ item })
    }
       render() {
        return (
            <div class="container">

                <Header items = {this.state.item}

                 cart = {this.state.item}

                />
                    <div class="main1">
                    <div class="left1">
                        <img class="pic-1" src="shirt.jpeg" />
                        <h3 class="title">Shirt</h3>
                        <span class="price" >$599.99</span><br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Shirt", 599.99)}>Add to cart</button><br></br>
                       </div>
                       <div class="center1">
                        <img class="pic-2" src="jeans.jpeg" />
                        <h3 class="title">Jeans</h3>
                        <span class="price">$899.99</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Jeans", 899.99)}>Add to cart</button>
                      </div>
                     <div class="right1">y
                         <img class="pic-3" src="tshirt.webp" />
                        <h3 class="title">T-shirt</h3>
                        <span class="price">$599.99</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("T-shirt", 599.99)}>Add to cart</button>
                    </div>
                </div>
                <div class="main2">
                    <div class="left2">
                        <img class="pic-4" src="top.jpeg" />
                        <h3 class="title">Top</h3>
                        <span class="price">$499.99</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Top", 499.99)}>Add to cart</button>
                    </div> 
                    <div className="center2">
                        <img class="pic-5" src="jumpshut.jpeg" />
                        <h3 class="title" >Jumpshut</h3>
                        <span class="price">$799.99</span> <br></br>
                        <button className="btn btn-success"  onClick={() => this.addToCartFunc("Jumpshut", 799.99)}> Add to cart</button>
                    </div>
                    <div className="right2">
                        <img class="pic-6" src="joggers.jpeg" />
                        <h3 class="title">Joggers</h3>
                        <span class="price">$599.99</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Joggers", 599.99)}> Add to cart</button>
                    </div>
                </div>
                <div class="main3">
                    <div class="left3">
                        <img class="pic-7" src="kurta.jpeg" />
                        <h3 class="title">Kurta</h3>
                        <span class="price">$800</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Kurta", 800)}> Add to cart</button>
                    </div>
                    <div className="center3">
                        <img class="pic-8" src="sari.jpeg" />
                        <h3 class="title">Sari</h3>
                        <span class="price">$1500</span> <br></br>
                        <button className="btn btn-success"  onClick={() => this.addToCartFunc("Sari", 1500)}>Add to cart</button>
                    </div>
                    <div className="right3">
                        <img class="pic-9" src="lahnga.jpeg" />
                        <h3 class="title">Lahnga</h3>
                        <span class="price">$5000</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Lahnga", 5000)}>Add to cart</button>
                    </div>
                </div>
                <div class="main4">
                    <div class="left4">
                        <img class="pic-10" src="sweater.jpeg" />
                        <h3 class="title">Sweater</h3>
                        <span class="price">$1200</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Sweater", 1200)}>Add to cart</button>
                    </div>
                    <div class="center4">
                        <img class="pic-11" src="dangri.jpeg" />
                        <h3 class="title">Dangri</h3>
                        <span class="price">$ 2000</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Dangri", 2000)}>Add to cart</button>
                    </div>
                    <div class="right4">
                        <img class="pic-12" src="gown.webp" />
                        <h3 class="title">Gown</h3>
                        <span class="price">$3000</span> <br></br>
                        <button className="btn btn-success" onClick={() => this.addToCartFunc("Gown", 3000)}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Grid;