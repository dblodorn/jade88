import React, {Component} from 'react'
import styled from 'styled-components'
import { buttonInit, flexRowCenteredVert, flexColumn } from './../styles/mixins'
import { H4, H6, StyledMarkup, BuyButton } from './../styles/components'
import { widths, colors, fonts, spacing } from './../styles/theme.json'
import VariantSelector from './VariantSelector'
import { FitImage } from './../components'

class Product extends Component {
  constructor(props) {
    super(props);
    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
    console.log(this.props)
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    
    const variantStuff = (props) => {
      return (
        <div>
          {variantSelectors}
          <label className="Product__option">
            Quantity <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
          </label>
        </div>
      )
    }
    
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
    return (
      <ProductCard>
        <CardInner>
          <ProductImage>
            {this.props.product.images.length
              ? <FitImage src={variantImage.src} fit={'contain'}/>
              : null
            }
          </ProductImage>
          <ProductInfo>
            <Info>
              <H4>{this.props.product.title}</H4>
              <StyledMarkup dangerouslySetInnerHTML={{__html: this.props.product.descriptionHtml }}/>
              <H6>${variant.price}</H6>
            </Info>
            <BuyButton onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>
              <span>Buy Now</span>
            </BuyButton>
          </ProductInfo>
        </CardInner>
      </ProductCard>
    );
  }
}

export default Product;

// STYLES
const ProductCard = styled.li`
  width: 100%;
  height: 100vh;
  margin: auto;
  position: relative;
`

const CardInner = styled.div`
  ${flexRowCenteredVert};
  width: 100%;
  height: 100%;
  max-width: 90rem;
  margin: auto;
  padding-top: 10%;
  position: relative;
`

const ProductImage = styled.div`
  width: 65%;
  height: 80%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

const ProductInfo = styled.div`
  width: 100%;
  position: relative;
`

const Info = styled.div`
  ${flexColumn};
  max-width: 50rem;
  padding-bottom: ${spacing.double_pad};
`
