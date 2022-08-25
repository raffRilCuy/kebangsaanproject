import {Container, Row, Col} from 'react-bootstrap'
import '../style/Introduction.css'

const Introduction = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor-placement="center-center">
      <Container className="animate__animated animate__bounceIn animate__slow d-flex text-center align-item-center justify-content-center mt-5 text-uppercase">
        <Row>
          <Col>
            <h1 className="introH1 fw-bold">Halo Semua! <br/>Perkenalkan Kami Dari Kelompok <br/>Penjaga Macan Tutul Jawa! </h1>
            <a href="#first" className="btn btn-dark mt-4">Lihat Lebih Lanjut</a>
          </Col>
        </Row>       
      </Container>
    </div>
  )
}

export default Introduction