import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog';

test('Blog component renders author and title but not url and likes by default', () => {
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

  const authorElement = document.querySelector('.author')
  const titleElement = document.querySelector('.title')
  const urlElement = document.querySelector('.url')
  // const titleElement = document.querySelector('.title')
  // screen.debug(element)
  expect(authorElement).toBeDefined()
  expect(titleElement).toBeDefined()
  expect(urlElement).toBe(null)
})

test('hidden content (url, likes) appears, button text switches to hide', async () => {

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
  const container = document.querySelector('.hide-view')
  await user.click(container)
  const element = screen.getByText('hide')
  const urlElement = document.querySelector('.url')
  const likesElement = document.querySelector('.likes')
  

  screen.debug(element)
  screen.debug(urlElement)
  screen.debug(likesElement)
  expect(element).toBeDefined()
  expect(urlElement).toBeDefined()
  expect(likesElement).toBeDefined()

})
