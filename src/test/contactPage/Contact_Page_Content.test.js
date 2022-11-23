import React from 'react'
import { render, screen } from '@testing-library/react';
import ContactPage  from '../../components/contact/contactcontent'

//Testing Data
const contactPageData = {title: 'Contact Us', content: "Harvard In tech Contact page is working"}

// Smoke test
it('Contace pake links renders', () => {
    render(<ContactPage contactPageData={contactPageData}/>)
});

//Snapshot Test
test("component matches snapshot", () => {
    const { asFragment } = render(<ContactPage contactPageData={contactPageData} />)
    expect(asFragment()).toMatchSnapshot()
});

// Unit test
test('Contact page Links unit test', () => {
    const {getByText} = render(<ContactPage contactPageData={contactPageData}/>)

    expect(getByText('Contact Us')).toBeInTheDocument
    expect(getByText("Harvard In tech Contact page is working")).toBeInTheDocument

    expect(screen.getByTestId('linkedin-link').href).toBe("https://www.linkedin.com/company/harvard-in-tech-seattle/")
    expect(screen.getByTestId('twitter-link').href).toBe("https://twitter.com/in_harvard")
    expect(screen.getByTestId('facebook-link').href).toBe("https://www.facebook.com/profile.php?id=100070986468967")
    expect(screen.getByTestId('email-link').href).toBe("mailto:info@harvardintechseattle.com")
    expect(screen.getByTestId('volunteer-link').href).toBe("https://lnkd.in/g43ipkP")
});