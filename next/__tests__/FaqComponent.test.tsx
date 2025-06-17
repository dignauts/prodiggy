import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import FaqComponent from '#da/components/main/FaqComponent';

describe('FaqComponent', () => {
  const title = 'Lorem ipsum';
  const content = 'Duis vel sapien et massa posuere tristique vitae eget enim.';

  it('renders the title and content (after expansion)', () => {
    const { container } = render(
      <FaqComponent title={title}>
        { content }
      </FaqComponent>
    );

    expect(screen.getByText(title)).toBeInTheDocument();

    const clickableHeader = container.querySelector('.DaFaqComponent-header');
    expect(clickableHeader).toBeInTheDocument();
    fireEvent.click(clickableHeader!);

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
