import { Card } from "react-bootstrap"

export default function AboutDev() {

  return (
    <>
      <Card className="d-flex justify-content-center">
        <Card.Img />
        <Card.Text>Derek Stanley-Howarth</Card.Text>
        <Card.Text>
          <a href="https://github.com/DSHowarth" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Card.Text>
        <Card.Text>
          <a href="https://www.linkedin.com/in/derek-stanley-howarth-933a46106/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Card.Text>
      </Card>
      <Card>
        <Card.Img />
        <Card.Text>Timothy Su</Card.Text>
        <Card.Text>
          <a href="https://github.com/timothysu1" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Card.Text>
        <Card.Text>
          <a href="https://www.linkedin.com/in/timothysu1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Card.Text>
      </Card>
      <Card>
        <Card.Img />
        <Card.Text>Xiaoran Cai</Card.Text >
        <Card.Text>
          <a href="https://github.com/Ailllycxr" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Card.Text>
        <Card.Text>
          <a href="https://www.linkedin.com/in/xrcai/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Card.Text>
      </Card>
    </>
  )
}

