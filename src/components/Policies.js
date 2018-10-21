import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Transition } from "react-spring";
import { StyledMarkup, LozengeButton } from "./../styles/components";
import { fixedWindow } from "./../styles/mixins";
import { colors, spacing } from "./../styles/theme.json";
import Modal from "./Modal";
import Close from './utils/Close'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this._Popup = this._Popup.bind(this);
  }

  _Popup() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return <Fragment>
        <LozengeButton onClick={() => this._Popup()}>
          <span>store policies</span>
        </LozengeButton>
        <Transition 
          from={{ opacity: 0, transform: `TranslateY(100vh)` }}
          enter={{ opacity: 1, transform: `TranslateY(0)` }}
          leave={{ opacity: 0, pointerEvents: "none", transform: `TranslateY(-100vh)` }}
        >
          {this.state.modal && (styles => <Modal>
                <PoliciesWrapper style={styles}>
                  <CloseWrapper><Close clickFunction={() => this._Popup()} color={colors.magenta} /></CloseWrapper>
                  <TermsMarkup className={`terms`} id={`terms`} dangerouslySetInnerHTML={{ __html: RefundPolicy }} />
                  <TermsMarkup className={`terms`} id={`terms`} dangerouslySetInnerHTML={{ __html: Terms }} />
                  <TermsMarkup className={`terms`} id={`terms`} dangerouslySetInnerHTML={{ __html: PrivacyPolicy }} />
                </PoliciesWrapper>
              </Modal>)}
        </Transition>
      </Fragment>;
  }
}

const PoliciesWrapper = styled.aside`
  ${fixedWindow};
  background-color: ${colors.yellow};
  z-index: 12000;
  padding: 0;
  #terms {
    padding: ${spacing.double_pad} ${spacing.double_pad} ${spacing.big_pad};
    margin: 0 auto;
    position: relative;
    max-width: 96rem;
    width: 100%;
  }
`;

const CloseWrapper = styled.div`
  position: sticky;
  width: 100vw;
  top: 0;
  right: 0;
  padding: ${spacing.single_pad};
  display: flex;
  justify-content: flex-end;
`

const TermsMarkup = styled(StyledMarkup)`
  p {
    font-size: 1.35rem;
    font-family: monospace, courier;
  }
`

const RefundPolicy = `
  <h2>Refund Policy</h2>
  <div class="modal__content"><p>Returns
<br>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>

<p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>

<p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>

<p>Additional non-returnable items:
<br>Gift cards
<br>Downloadable software products
<br>Some health and personal care items</p>

<p>To complete your return, we require a receipt or proof of purchase.</p>

<p>Please do not send your purchase back to the manufacturer.</p>

<p>There are certain situations where only partial refunds are granted (if applicable)
<br>Book with obvious signs of use
<br>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened
<br>Any item not in its original condition, is damaged or missing parts for reasons not due to our error
<br>Any item that is returned more than 30 days after delivery</p>

<p>Refunds (if applicable)
<br>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
<br>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

<p>Late or missing refunds (if applicable)
<br>If you haven’t received a refund yet, first check your bank account again.
<br>Then contact your credit card company, it may take some time before your refund is officially posted.
<br>Next contact your bank. There is often some processing time before a refund is posted.
<br>If you’ve done all of this and you still have not received your refund yet, please contact us at hi@jadeeightyeight.com.</p>

<p>Sale items (if applicable)
<br>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>

<p>Exchanges (if applicable)
<br>We only replace items if they are defective or damaged.  If you need to exchange it for the same item, send us an email at hi@jadeeightyeight.com and send your item to: Jade Eighty Eight, Inc., 177 E Colorado Blvd, Suite 200, Pasadena CA 91101, United States.</p>

<p>Gifts
<br>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>

<p>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>

<p>Shipping
<br>To return your product, you should mail your product to: Jade Eighty Eight, Inc., 177 E Colorado Blvd, Suite 200, Pasadena CA 91101, United States</p>

<p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

<p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>

<p>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
</div>
`

const Terms = `
<h2>Terms of Service</h2>
<div class="modal__content"><p>OVERVIEW</p>
<p>This website is operated by Jade 88. Throughout the site, the terms “we”, “us” and “our” refer to Jade 88. Jade 88 offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
<p>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
<p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
<p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
<p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>
<p>SECTION 1 - ONLINE STORE TERMS</p>
<p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
<br>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
<br>You must not transmit any worms or viruses or any code of a destructive nature.
<br>A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
<p>SECTION 2 - GENERAL CONDITIONS</p>
<p>We reserve the right to refuse service to anyone for any reason at any time.
<br>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
<br>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
<br>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
<p>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</p>
<p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
<br>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
<p>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</p>
<p>Prices for our products are subject to change without notice.
<br>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
<br>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
<p>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</p>
<p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
<br>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
<br>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
<br>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
<p>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</p>
<p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.</p>
<p>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>
<p>For more detail, please review our Returns Policy.</p>
<p>SECTION 7 - OPTIONAL TOOLS</p>
<p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.
<br>You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
<br>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).
<br>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>
<p>SECTION 8 - THIRD-PARTY LINKS</p>
<p>Certain content, products and services available via our Service may include materials from third-parties.
<br>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.
<br>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
<p>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</p>
<p>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.
<br>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
<br>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>
<p>SECTION 10 - PERSONAL INFORMATION</p>
<p>Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.</p>
<p>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</p>
<p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
<br>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>
<p>SECTION 12 - PROHIBITED USES</p>
<p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>
<p>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</p>
<p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
<br>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
<br>You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
<br>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
<br>In no case shall Jade 88, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>
<p>SECTION 14 - INDEMNIFICATION</p>
<p>You agree to indemnify, defend and hold harmless Jade 88 and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>
<p>SECTION 15 - SEVERABILITY</p>
<p>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
<p>SECTION 16 - TERMINATION</p>
<p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
<br>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
<br>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>
<p>SECTION 17 - ENTIRE AGREEMENT</p>
<p>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.
<br>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
<br>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>
<p>SECTION 18 - GOVERNING LAW</p>
<p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Jade Eighty Eight, Inc., 177 E Colorado Blvd, Suite 200, Pasadena CA 91101, United States.</p>
<p>SECTION 19 - CHANGES TO TERMS OF SERVICE</p>
<p>You can review the most current version of the Terms of Service at any time at this page.
<br>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
<p>SECTION 20 - CONTACT INFORMATION</p>
<p>Questions about the Terms of Service should be sent to us at hi@jadeeightyeight.com.</p>
</div>`
;

const PrivacyPolicy = `
  <h2>Privacy Policy</h2>
  <div class="modal__content"><p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from jadeeightyeight.com (the “Site”).</p>

<p>PERSONAL INFORMATION WE COLLECT
<br>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</p>

<p>We collect Device Information using the following technologies:
<br>- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
<br>- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
<br>- “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.
<br>- [[INSERT DESCRIPTIONS OF OTHER TYPES OF TRACKING TECHNOLOGIES USED]]</p>

<p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers [[INSERT ANY OTHER PAYMENT TYPES ACCEPTED]]), email address, and phone number. We refer to this information as “Order Information”.</p>

<p>[[INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED MARKETING DATA/LISTS]]</p>

<p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

<p>HOW DO WE USE YOUR PERSONAL INFORMATION?
<br>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
<br>- Communicate with you;
<br>- Screen our orders for potential risk or fraud; and
<br>- When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
<br>- [[INSERT OTHER USES OF ORDER INFORMATION]]</p>

<p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

<p>[[INSERT OTHER USES OF DEVICE INFORMATION, INCLUDING: ADVERTISING/RETARGETING]]</p>

<p>SHARING YOUR PERSONAL INFORMATION
<br>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>

<p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

<p>BEHAVIOURAL ADVERTISING
<br>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>

<p>You can opt out of targeted advertising by using the links below:
<br>- Facebook: https://www.facebook.com/settings/?tab=ads
<br>- Google: https://www.google.com/settings/ads/anonymous
<br>- Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
<br>- [[INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED]]</p>

<p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.</p>

<p>DO NOT TRACK
<br>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>

<p>YOUR RIGHTS
<br>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

<p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>

<p>DATA RETENTION
<br>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

<p>CHANGES
<br>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

<p>[[INSERT IF AGE RESTRICTION IS REQUIRED]]
<br>MINORS
<br>The Site is not intended for individuals under the age of [[INSERT AGE]]  .</p>

<p>CONTACT US
<br>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at hi@jadeeightyeight.com or by mail using the details provided below:</p>

<p>Jade 88
<br>[Re: Privacy Compliance Officer]
<br>Jade Eighty Eight, Inc., 177 E Colorado Blvd, Suite 200, Pasadena CA 91101, United States</p>
</div>
`