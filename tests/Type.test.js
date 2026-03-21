import { render } from '@testing-library/react';

import Type from '../components/home/Type';

describe('Type', () => {
  test('render the typewriter effect', () => {
    const { container } = render(<Type />);
    const typewriterElement = container.querySelector('.Typewriter');
    expect(typewriterElement).toBeInTheDocument();
  });
});
