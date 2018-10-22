import React, { Component } from "react";
import img from "../../assets/product.jpg";

class Accordion extends Component {
  state = {
    showBody: false,
    caret: "fa fa-caret-down"
  };

  toggleBody = (e) => {
    console.log("e", e.target);
    this.setState({
      //   ...this.state,
      showBody: this.state.showBody ? false : true,
      caret: this.state.showBody ? "fa fa-caret-down" : "fa fa-caret-up"
    });
  };
  render() {
    console.log("propr", this.props);
    const { product } = this.props;

    return (
      <div className="border border-info width18 m-3">
        <div className="p-1  font-weight-bold">
          <span>{product.productCode}</span>
          <span className="float-right" onClick={this.toggleBody}>
            <span className={this.state.caret} />
          </span>
        </div>

        {this.state.showBody ? (
          <div className="row accordBody  m-0 border-top border-info">
            <div className="col-sm-9 ">
              <table>
                <tbody>
                  <tr>
                    <td>Product Code:</td>
                    <td>{this.props.product.productCode}</td>
                  </tr>
                  <tr>
                    <td>Product Number:</td>
                    <td>{this.props.product.productNo}</td>
                  </tr>
                  <tr>
                    <td>Expiry Date:</td>
                    <td>{this.props.product.expiryDate}</td>
                  </tr>
                  <tr>
                    <td>Manufacturer:</td>
                    <td>{this.props.product.manufacturer}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-3 d-iniline-block p-1">
              <img src={img} alt="product img" className="wdtht100" />
            </div>
          </div>
        ) : null}
      </div>
    );
    // })
    // ) : (
    //   <div>No Product</div>
    // );

    // return { productList };
  }
}

export default Accordion;
