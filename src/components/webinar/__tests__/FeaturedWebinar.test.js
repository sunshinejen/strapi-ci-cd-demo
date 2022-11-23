import React from 'react';
import {render, screen } from '@testing-library/react';
import FeaturedWebinar from '../featuredWebinar';

//Snapshot Test
const data = {
    date: 'Thursday, July 09, 2037',
    time: "3:00pm",
    webinar_title: 'Racism, Why We Must Solve It in Technology',
    webinar_description: "We explore how can technology improve the treatment of racial groups and their interactions with the Police, and criminal justice system, improve equity in education, improve financial opportunities and more.",
    flyer_img: "https://res.cloudinary.com/dlz977spb/image/upload/v1659651175/racism_solve_in_tech_flyer_bfdfe16a62.png",
    registration: "https://docs.google.com/forms/d/e/1FAIpQLSeV3qKNMJDTZ6jb1sKlesJNCU4p_x4D0r5ZUUZ3VRgHsznJ1g/viewform",
}

//Snapshot Test 
it("Renders as expected", () => {
    render(<FeaturedWebinar webinar={data} />)
});

test("Featured Webinar snapshot", () => {
    const { asFragment } = render(<FeaturedWebinar webinar={data} />)
    expect(asFragment()).toMatchSnapshot()
});

//Unit Test
test('Featured Webinar page', () => {

    const { getByText } = render(<FeaturedWebinar webinar={data} />)


    const testImage = document.querySelector("img")
    expect(testImage.alt).toContain("...")
    expect(getByText('Thursday, July 09, 2037')).toBeInTheDocument()
    expect(getByText('3:00pm')).toBeInTheDocument()
    expect(getByText('We explore how can technology improve the treatment of racial groups and their interactions with the Police, and criminal justice system, improve equity in education, improve financial opportunities and more.')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSeV3qKNMJDTZ6jb1sKlesJNCU4p_x4D0r5ZUUZ3VRgHsznJ1g/viewform')
});

