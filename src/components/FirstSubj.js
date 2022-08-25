import { Col, Container, Row } from 'react-bootstrap'
import '../style/FirstSubj.css'


const FirstSubject = () => {
  return (
    <div id="first">
      <div data-aos="zoom-in" data-aos-duration="2000">
        <Container className="text-center d-flex flex-column justify-content-center align-item-center">
          <Row>
            <Col className="marginFirstSubject">
              <h1 className="text-uppercase fw-bold">Kami mendapat materi tentang budaya oleh yanda oke, jadi sekarang kita akan mempresentasikan tentang budaya</h1>
              <a className="btn btn-dark mt-4" href="#second">Lihat Tentang Budaya</a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default FirstSubject