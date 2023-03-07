import {NotFoundCard, NotImage, NotHeading, NotText} from './styledComponents'

const NotFound = () => (
  <NotFoundCard>
    <NotImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotHeading>Page Not Found</NotHeading>
    <NotText>We are sorry, the page you requested could not be found.</NotText>
  </NotFoundCard>
)

export default NotFound
