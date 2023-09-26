import { render, screen } from '@testing-library/react'
import { resolve } from 'path'
import { vi } from 'vitest'
import HomePage from '../app/page'

vi.mock('@clerk/nextjs', () => {
  return {
    auth: () =>
      new Promise((resolve) =>
        resolve({ userId: 'user_2NNEqL2nrIRdJ194ndJqAHwEfxC' })
      ),
    ClerkProvider: ({ children }) => <div>{children}</div>,
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: 'user_2NNEqL2nrIRdJ194ndJqAHwEfxC',
        fullName: 'Charles Harris',
      },
    }),
  }
})

vi.mock('next/font/google', () => {
  return {
    Inter: () => ({ className: 'inter' }),
  }
})

test('Home', async () => {
  render(await HomePage())
  expect(screen.getByText('get started')).toBeTruthy()
})
