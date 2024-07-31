import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';

import { Toaster } from '../main';
import ToastTestComponent from './toast-test-component';

describe('Toast notifications', () => {
  test('should display a success toast', async () => {
    render(
      <>
        <Toaster position="bottom-right" />
        <ToastTestComponent />
      </>,
    );

    // Click the button to show the toast:
    const button = screen.getByText('Show Toast');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Hello Toast!')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('This is a success toast')).toBeInTheDocument();
    });

    // Press Close Button to remove the toast:
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('Hello Toast!')).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.queryByText('This is a success toast'),
      ).not.toBeInTheDocument();
    });
  });
});
