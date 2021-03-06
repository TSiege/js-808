import React from 'react'
import { render } from '@testing-library/react'
import Controller from '.'

test('renders itself', () => {
  const { getByText } = render(<Controller />)
  const h1Element = getByText(/JS-808/i)
  expect(h1Element).toBeInTheDocument()
})
