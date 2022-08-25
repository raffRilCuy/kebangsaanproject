import {Container, Row, Col} from 'react-bootstrap'
import bangunPict from '../img/bangun.jpeg'
import '../style/BangunPagi.css'

const BangunPagi = () => {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col className="marginTop" data-aos="zoom-in" data-aos-duration="2000">
              <h1 className="fw-bold text-uppercase text-center d-flex justify-content-center align-item-center">Salah satu contoh budaya adalah, <br/>bangun pagi</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="d-flex positionCol" >
            <h5 data-aos="fade-right" data-aos-duration="2000" className="d-flex justify-content-center align-item-center mt-5">Salah satu contoh dari budaya adalah Bangun Pagi. Mengapa Bangun Pagi disebut budaya? Karena jika kita memiliki budaya Bangun Pagi, maka itu akan menjadi Tradisi, lalu dari Tradisi akan menjadi Tindakan. Tindakannya Apa? Tindakannya itu adalah Bangun Pagi, lalu setelah dari Tindakan kembali lagi menjadi Budaya.</h5><span>
              <img data-aos="fade-left" data-aos-duration="2000" className="bangunCuy" src={bangunPict}/>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

  export default BangunPagi