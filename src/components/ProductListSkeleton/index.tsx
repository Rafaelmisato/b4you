import { Container } from './styles'

import SkeletonLoader from 'tiny-skeleton-loader-react'

const ProductsList: React.FC = () => {
  return (
    <Container>
      <div>
        <div className="header">
          <div className="header-img">
            <SkeletonLoader width="100px" height="100px" block={false} />
          </div>
          <div className="header-text">
            <SkeletonLoader width="100%" height="20px" />
            <SkeletonLoader width="40%" height="20px" />
            <SkeletonLoader width="60%" height="16px" />
          </div>
        </div>
        <SkeletonLoader width="100%" height="100px" />
        <div className="buttons">
          <SkeletonLoader width="150px" height="40px" />
          <SkeletonLoader width="40px" height="40px" />
        </div>
      </div>
    </Container>
  )
}

export default ProductsList
