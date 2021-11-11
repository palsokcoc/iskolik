
import React from "react";
import { Row, Col, Card } from '@themesberg/react-bootstrap';

export default (props) => {
  
  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/about" target="_blank">
                  Hakkında
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/contact" target="_blank">
                  İletişim
                </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
