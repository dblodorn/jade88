import React from 'react'
import { Helmet } from 'react-helmet'

export default props =>
  <Helmet key={window.location.href}>
    <meta charSet="utf-8" />
    <title>{`Jade88 - ${props.title || ''}`}</title>
    <meta name="description" content={props.description || ''} />
    <meta itemprop='name' content={`Jade88 - ${props.title || ''}`} />
    <meta itemprop='description' content={props.description || ''} />
    <meta itemprop='image' content={props.social_image || ''} />
    {/* TWITTER */}
    <meta name='twitter:title' content={`Jade88 - ${props.title || ''}`} />
    <meta name='twitter:description' content={props.description || ''} />
    <meta name='twitter:image' content={props.social_image || ''}/>
    {/* OPENGRAPH */}
    <meta property='og:title' content={`Jade88 - ${props.title || ''}`} />
    <meta property='og:description' content={props.description || ''} />
    <meta property='og:site_name' content={`Jade88 - ${props.title || ''}`} />
    <meta property='og:image' content={props.social_image || ''} />
  </Helmet>