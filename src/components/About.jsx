import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default function About() {
  return (
    <section className='about-area'>
        <Container>
            <Row>
                <Col>
                    <div className="about-content text-center">
                        <div className="about-content-inner">
                            <h3>About Meow Meow</h3>
                            <p>The content of this project, website and whitepaper is provided for information purposes only and shall not in any way constitute an investment advice or investment recommendation in any product discussed. Buy at your own risk. <b>$MEOW</b> is a meme token.</p>
                            <p>It is strongly recommended that you seek professional investment advice before making any investment decision. Any investment decision that you make should be based on an assessment of your risks in consultation with your investment adviser.</p>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
