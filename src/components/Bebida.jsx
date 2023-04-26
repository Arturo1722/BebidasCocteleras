import { Col, Card, Button} from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

const Bebida = ({bebida}) => {

  const {handleModalClick, handleBebidaIdClick} = useBebidas()
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4 mt-2'>
          <Card.Img 
             variant='top'
             src={bebida.strDrinkThumb}
             alt={`imagen de ${bebida.strDrink}`}
          />
      </Card>

      <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>

          <Button 
            variant={'warning'}
            className="w-100 text-uppercase mt-2"
            onClick={ () => {
                handleModalClick()
                handleBebidaIdClick(bebida.idDrink)
            }}
          >
            Ver Receta
          </Button>
      </Card.Body>
    </Col>
  )
}

export default Bebida
