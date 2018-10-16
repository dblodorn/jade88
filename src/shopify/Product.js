import React, {Component} from 'react'
import styled from 'styled-components'
import { flexRowCenteredVert, flexColumn, media } from './../styles/mixins'
import { H4, H6, StyledMarkup, BuyButton } from './../styles/components'
import { colors, spacing } from './../styles/theme.json'
import VariantSelector from './VariantSelector'
import { FitImage } from './../components'

class Product extends Component {
  constructor(props) {
    super(props);
    let defaultOptionValues = {}
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value
    })
    this.state = { selectedOptions: defaultOptionValues }
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.findImage = this.findImage.bind(this)
  }

  findImage(images, variantId) {
    const primary = images[0]

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId)
    })[0]

    return (image || primary).src
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions
    selectedOptions[target.name] = target.value

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    })
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    })
  }

  render() {
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
      )
    })
    return (
      <ProductCard className={this.props.product.handle}>
        <CardInner>
          <ProductImage className={'product-image'}>
            {this.props.product.images.length
              ? <FitImage src={variantImage.src} fit={'contain'}/>
              : null
            }
          </ProductImage>
          <ProductInfo className={'product-info'}>
            <Info>
              <H4>{this.props.product.title}</H4>
              <StyledMarkup dangerouslySetInnerHTML={{__html: this.props.product.descriptionHtml }}/>
              <Price>
                <H6>${variant.price}</H6>
              </Price>
              <BuyButton onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>
                <span>Buy Now</span>
              </BuyButton>
            </Info>
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
  padding: 1.5rem;
  &:nth-child(odd) {
    .product-image {
      right: 0;
      left: auto;
    }
    .product-info {
      left: 0;
      right: auto;
    }
  }
  &:nth-child(even) {
    .product-image {
      left: 0;
      right: auto;
    }
    .product-info {
      right: 0;
      left: auto;
      justify-content: flex-end;
    }
  }
  &.green-jade-roller {
    background-color: ${colors.jade};
    button {
      background-color: ${colors.magenta};
    }
  }
  &.rose-quartz-roller {
    background-color: ${colors.magenta};
    button {
      background-color: ${colors.green};
    }
  }
  &.white-jade-roller {
    background-color: ${colors.white};
  }
`

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 75rem;
  margin: auto;
  padding-top: 10%;
  position: relative;
`

const ProductImage = styled.div`
  width: 100%;
  height: 95%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  ${media.desktopNav`
    width: 35%;
    height: 80%;
  `}
`

const ProductInfo = styled.div`
  ${flexRowCenteredVert};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding-top: 25%;
  ${media.desktopNav`
    width: 75%;
    height: 80%;
  `}
`

const Info = styled.div`
  ${flexColumn};
  max-width: 50rem;
`

const Price = styled.div`
  padding-bottom: ${spacing.double_pad};
`
