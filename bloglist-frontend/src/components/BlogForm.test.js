import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm';

test('clicking the button calls event handler once', async () => {

    const mockHandler = jest.fn()

    render(<BlogForm handleCreate={mockHandler} />)

    screen.debug()
    const user = userEvent.setup()
    const button = screen.getByText('Create')
    await user.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})