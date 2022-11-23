import React from 'react'
import { render, screen } from '@testing-library/react';
import ContactLinks  from '../../components/contact/contact_Links'

// Smoke test
it('Contace pake links renders', () => {
    render(<ContactLinks/>)
});

// Unit Test
test('Contact page Links unit test', () => {
    render(<ContactLinks/>)

    expect(screen.getByTestId('linkedin-link').href).toBe("https://www.linkedin.com/company/harvard-in-tech-seattle/")
    expect(screen.getByTestId('twitter-link').href).toBe("https://twitter.com/in_harvard")
    expect(screen.getByTestId('facebook-link').href).toBe("https://www.facebook.com/profile.php?id=100070986468967")
    expect(screen.getByTestId('email-link').href).toBe("mailto:info@harvardintechseattle.com")
    expect(screen.getByTestId('volunteer-link').href).toBe("https://lnkd.in/g43ipkP")
});