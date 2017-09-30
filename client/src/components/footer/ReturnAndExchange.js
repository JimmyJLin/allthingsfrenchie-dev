import React, { Component } from 'react';
import { Col} from 'react-bootstrap';

import './_footer.scss';

class ReturnAndExchange extends Component {

  render() {
    return (
      <div id="returnAndExchange" className="container-fluid">
        <Col xs={18} sm={10} md={10}>
          <h2 className="main_title">Returns and Exchanges</h2>
          <div className="container">
            <h3 className="title">Returns</h3>
            <p>
              Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
            </p>
            <p>
              To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
            </p>
            <p>
              Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
            </p>
          </div>
          <div className="container">
            <h3 className="title">Additional non-returnable items:</h3>
            <p>
              Gift cards <br/>
              Downloadable software products <br/>
              Some health and personal care items
            </p>
            <p>
              To complete your return, we require a receipt or proof of purchase.
            </p>
            <p>
              Please do not send your purchase back to the manufacturer.
            </p>
            <p>
              There are certain situations where only partial refunds are granted (if applicable) <br/>
              Book with obvious signs of use <br/>
              CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened <br/>
              Any item not in its original condition, is damaged or missing parts for reasons not due to our error <br/>
              Any item that is returned more than 30 days after delivery
            </p>
          </div>
          <div className="container">
            <h3 className="title">Refunds (if applicable)</h3>
            <p>
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. <br/>
              If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
            </p>
          </div>
          <div className="container">
            <h3 className="title">Late or missing refunds (if applicable)</h3>
            <p>
              If you haven’t received a refund yet, first check your bank account again. <br/>
              Then contact your credit card company, it may take some time before your refund is officially posted. <br/>
              Next contact your bank. There is often some processing time before a refund is posted. <br/>
              If you’ve done all of this and you still have not received your refund yet, please contact us at support@allthingsfrenchie.com.
            </p>
          </div>
          <div className="container">
            <h3 className="title">Sale items (if applicable)</h3>
            <p>
              Only regular priced items may be refunded, unfortunately sale items cannot be refunded.
            </p>
          </div>
          <div className="container">
            <h3 className="title">Exchanges (if applicable)</h3>
            <p>
              We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@allthingsfrenchie.com and send your item to: 37-63 83rd Street Jackson Heights New York US 11372.
            </p>
            <p>
              Gifts <br/>
              If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
            </p>
            <p>
              If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
            </p>
            <p>
              Shipping <br/>
              To return your product, you should mail your product to:
            </p>
            <p id="center_bold">
              37-63 83rd Street #248 <br/>
              Jackson Heights, <br/>
              New York, NY 11372
            </p>
            <p>
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
            <p>
              Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
            </p>
            <p>
              If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
            </p>
          </div>
        </Col>
      </div>
    )
  }
}

export default ReturnAndExchange;
