import { render, screen, fireEvent } from '@testing-library/react'
import Header from './index'

describe('Header component', () => {
  it('should be able to render component correctly', () => {
    render(<Header />)

    const logoElement = screen.getByText('Anime')
    expect(logoElement).toBeInTheDocument()

    expect(screen.getByText('Navegar')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
  
  it('should be able to get input value correctly', () => {
    render(<Header />)

    const inputElement = screen.queryByPlaceholderText('Search...')  as HTMLElement

    fireEvent.change(inputElement!, {
      target: {
        value: 'John Doe'
      }
    })

    const typedValue = screen.queryByText('John Doe')

    expect(typedValue).toHaveTextContent('John Doe')
  })
})