import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import ToastTestComponent from './toast-test-component';

describe('Toast notifications', () => {
  test('should display a success toast', async () => {
    render(<ToastTestComponent />);

    // Click the button to show the toast:
    const button = screen.getByText('Show Toast');
    fireEvent.click(button);

    // Esperar a que el toast aparezca en el DOM
    await waitFor(() => {
      expect(screen.getByText('Hello Toast!')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('This is a success toast')).toBeInTheDocument();
    });

    // Press Close Button to remove the toast:
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    // Esperar a que el toast desaparezca del DOM
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
