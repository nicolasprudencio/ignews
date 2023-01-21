import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { Async } from '.'

it('renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument()

  expect(await screen.findByText('Button')).toBeInTheDocument()
})
