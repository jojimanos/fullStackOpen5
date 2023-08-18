import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog';

test('Blog Component', () => {
  const mockBlog = {
    id: 1,
    author: 'Test Author',
    title: 'Test Title',
    url: 'http://test-url.com',
    likes: 10,
    user: {
      userName: 'testuser'
    }
  };

  render(<Blog blog={mockBlog} />)

  screen.debug()

  const element = screen.getByText('Test Author')
  screen.debug(element)
  expect(element).toBeDefined()
})

test('hidden content appears', async () => {

  const mockBlog = {
    id: 1,
    author: 'Test Author',
    title: 'Test Title',
    url: 'http://test-url.com',
    likes: 10,
    user: {
      userName: 'testuser'
    }
  };

  render(<Blog blog={mockBlog}/>)

  const user = userEvent.setup()
  const container = document.querySelector('.view')
  await user.click(container)
  const element = screen.getByText('hide')

  screen.debug(element)
  expect(element).toBeDefined()

})
