import React from 'react';
import { Col} from 'react-bootstrap';

import './_footer.scss';

export default () => {
  return (
    <div id="shipping" className="container-fluid">
      <Col xs={18} sm={10} md={10}>
        <h2 className="main_title">Shipping Information</h2>
        <div className="domestic">
          <h3 className="title">Shipping within United States</h3>
          <table>
            <tr>
              <th></th>
              <th>Standar / USPS</th>
              <th>Express</th>
              <th>Rush</th>
            </tr>
            <tr id="colored">
              <td id="text_bold">Order Value</td>
              <td>Arrives in 5-9 business days</td>
              <td>Arrives in 2-3 business days</td>
              <td>Arrives in 1-2 business days</td>
            </tr>
            <tr>
              <td>up to $34.99</td>
              <td>$2.95</td>
              <td>$14.95</td>
              <td>$21.95</td>
            </tr>
            <tr id="colored">
              <td>$35 and over</td>
              <td id="red_text">FREE</td>
              <td>$14.95</td>
              <td>$21.95</td>
            </tr>
          </table>
        </div>
        <div className="international">
          <h3 className="title">Shipping to Canada & Mexico, and Rest of the World</h3>
          <table>
            <tr>
              <th></th>
              <th>Canada & Mexico</th>
              <th>Rest of the World</th>
            </tr>
            <tr id="colored">
              <td>Standard Shipping</td>
              <td>$14.95</td>
              <td>$24.95</td>
            </tr>
          </table>
          <p>Orders shipped outside of the contiguous US and to PO boxes are shipped via USPS Priority Mail and cannot be expedited.</p>
          <p>Please note that our delivery options refer only to the delivery time frame and not to the time required to prepare your order.  While most orders are ready for shipping within 1 day of ordering, some orders may take additional time.</p>
        </div>

      </Col>
    </div>
  )
}
