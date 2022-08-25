import { Container, Row, Col } from 'react-bootstrap'
import '../style/BerSekolah.css'
import berSek from '../img/sekolah.jpeg'

const BerSekolah = () => {
  return (
    <div>
      <div>
      <Container>
        <Row>
          <Col>
            <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-uppercase d-flex fw-bold text-center justify-content-center align-item-center marginTop">apa manfaat dari bangun pagi?</h1>
          </Col>
        </Row>
      </Container>  
      </div>
      <div>
      <Container>
        <Row>
          <Col className="d-flex marginCol">
          <img data-aos="fade-right" data-aos-duration="2000" className="berSek" src={berSek} /><span><h5 data-aos="fade-left" data-aos-duration="2000" className="mt-5">Manfaat dari Bangun Pagi adalah kita bisa Sarapan tanpa diburu oleh waktu atau bisa sarapan tanpa terburu-buru, lalu kita bisa menjadi Lebih Produktif jika Bangun Pagi, dan yang terpenting adalah kita tidak akan telat berangkat ke sekolah. Karena itu, tidak ada lagi OSIS yang mencatat nama kita karena terlambat datang ke sekolah </h5></span>
          </Col>
        </Row>
      </Container>  
      </div>
    </div>
  );
}

export default BerSekolah