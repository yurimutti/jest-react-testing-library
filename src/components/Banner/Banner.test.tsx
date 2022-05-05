import  { render, screen } from '@testing-library/react'
import Banner from './index';

describe('Banner component',() => {
  it('should be able to render image correctly', () => {
    render(<Banner />)

    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
  })

  it('should be able to find the image by the alt text',  () => {
    render(<Banner />)

    const altTextImageElement = screen.getByAltText('Boku No Hero')
    expect(altTextImageElement).toBeInTheDocument()
  })

})