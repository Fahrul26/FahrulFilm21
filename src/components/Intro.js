import { Button, Col, Container, Row,} from 'react-bootstrap';

const Intro = () => {
    return(
        <div className=' intro'>
            <Container className='text-black text-center d-flex justify-content-center align-items-center'>
                <Row>
                <Col>
                    <div className='title'>NONTON GRATIS GAUSAH</div>
                    <div className='title'>REWEL GA SENENG KE BIOSKOP</div>
                    <div className='introButton mt-4 text-center'>
                        <Button variant='dark'>Lihat semua list</Button>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro;