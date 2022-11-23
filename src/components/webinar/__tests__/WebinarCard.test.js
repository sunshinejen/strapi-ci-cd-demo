import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import WebinarCard from '../webinarCard';
import { Modal } from 'react-bootstrap';

//webinar test data 
const webinarTestData = {
    date: 'Thursday, July 09, 2037',
    webinar_title: 'Racism, Why We Must Solve It in Technology',
    webinar_description: "We explore how can technology improve the treatment of racial groups and their interactions with the Police, and criminal justice system, improve equity in education, improve financial opportunities and more.",
    flyer_img: {
        url: "https://res.cloudinary.com/dlz977spb/image/upload/v1659651175/racism_solve_in_tech_flyer_bfdfe16a62.png"
    },
    registration: "https://docs.google.com/forms/d/e/1FAIpQLSeV3qKNMJDTZ6jb1sKlesJNCU4p_x4D0r5ZUUZ3VRgHsznJ1g/viewform",
    webinar_url: "https://www.youtube.com/embed/XE-pTIqLTwE",
    panelist_names: "test",
    moderator_names: "names",
    key_takeaways: "testing"
}


//Smoke Test
it("Webinar Card renders as expected", () => {
    render(<WebinarCard webinar={webinarTestData} />)
});

test("Webinar Card snapshot", () => {
    const { asFragment } = render(<WebinarCard webinar={webinarTestData} />)
    expect(asFragment()).toMatchSnapshot()
});

test("Card Unit Test", () => {
    const { getByText,getByTestId } = render(<WebinarCard
        webinar={webinarTestData}
    />)

    expect(getByText("Thursday, July 09, 2037")).toBeInTheDocument()
    expect(getByText('Racism, Why We Must Solve It in Technology')).toBeInTheDocument()
    expect(getByText("We explore how can technology improve the treatment of racial groups and their interactions with the Police, and criminal justice system, improve equity in education, improve financial opportunities and more.")).toBeInTheDocument()

    //img 
    const testImage = document.querySelector("img")
    expect(testImage.src).toContain("https://res.cloudinary.com/dlz977spb/image/upload/v1659651175/racism_solve_in_tech_flyer_bfdfe16a62.png")
   

    //modal open
    fireEvent.click(screen.getByTestId('webinar-view-button'))
    expect(getByText("test")).toBeInTheDocument()
    expect(getByText("names")).toBeInTheDocument()
    expect(getByText("testing")).toBeInTheDocument()
    expect(getByTestId("modal-description")).toBeVisible()
    expect(getByTestId("modal-title")).toBeVisible()
    expect(getByTestId("modal-panelist")).toBeVisible()
    expect(getByTestId("modal-moderators")).toBeVisible()
    expect(getByTestId("modal-takeaways")).toBeVisible()



    //iframe 
    const testIframe = document.querySelector("iframe")
    expect(testIframe.src).toContain("https://www.youtube.com/embed/XE-pTIqLTwE")

    //modal close
    fireEvent.click(screen.getByTestId('webinar-view-button'))
})
