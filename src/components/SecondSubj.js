import {Container, Row, Col} from 'react-bootstrap'
import '../style/SecondSubj.css'

const SecondSubj = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col id="second">
          <div>
            <div data-aos="fade-down" data-aos-duration="1000" className="text-center text-uppercase marginBud ">
              <h1 className="fw-bold sizeBud">Budaya</h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="d-flex flex-column marginSec">
              <h3 className="fw-bold">Asal Kata Budaya</h3>
              <p>Kata budaya berasal dari bahasa sansekerta buddhayah yang merupakan bentuk jamak dari kata buddhi dan daya</p>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="d-flex flex-column marginSec align-item-center justify-content-center text-center">
              <h3 className="fw-bold">Arti Dari Buddhi dan Daya</h3>
              <p>Buddhi memiliki arti budi atau akal budi atau pikiran manusia, sedangkan Daya memiliki arti usaha</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" className="d-flex flex-column marginSec align-item-center justify-content-center txtRight">
              <h3 className="fw-bold">Pengertian Dari Budaya</h3>
              <p>Budaya adalah suatu cara hidup yang berkembang dan dimiliki bersama oleh sekelompok orang, serta diwariskan dari generasi ke generasi <br/><i>sumber : wikipedia</i></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SecondSubj