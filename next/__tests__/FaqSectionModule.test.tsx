import { render, screen } from '@testing-library/react';
import React from 'react';

import { faqFakes } from '#da/fakes/faq.fakes';
import FaqSectionModule from '#da/modules/sections/FaqSectionModule';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    const translations: Record<string, string> = {
      'faq_section_module.title': 'Frequently asked questions',
      'faq_section_module.description': 'Lorem ipsum dolor sit amet consectetur. Dolor adipiscing tortor ut lobortis in montes. Purus.',
      'common.no_results': 'No results'
    };

    return (key: string) => translations[key] ?? key;
  }
}));

describe('FaqSectionModule', () => {
  it('renders the FAQ list if faqFakes is not empty', () => {
    const { container } = render(<FaqSectionModule />);
    
    const faqItems = container.querySelectorAll('.DaFaqComponent-root');
    expect(faqItems.length).toBe(faqFakes.length);

    faqFakes.forEach(faq => {
      expect(screen.getByText(faq.title)).toBeInTheDocument();
    });
  });

  it("shows the 'no results' message if faqFakes is empty", () => {
    const originalFaqFakes = [...faqFakes];

    try {
      faqFakes.length = 0;

      render(<FaqSectionModule />);
      expect(screen.getByText('No results')).toBeInTheDocument();
    } finally {
      faqFakes.length = 0;
      originalFaqFakes.forEach(item => faqFakes.push(item));
    }
  });

  it('renders SectionComponent with correct title and description', () => {
    render(<FaqSectionModule />);

    expect(screen.getByText('Frequently asked questions')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet consectetur. Dolor adipiscing tortor ut lobortis in montes. Purus.')).toBeInTheDocument();
  });
});
