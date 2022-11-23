import React from 'react';
import { getAllByRole, getAllByTestId, render, screen } from '@testing-library/react';
import UpcomingWebinars from '../upcomingWebinars';

//webinar test data 
const upcomingWebinarTestData = [
    {
        date: 'Thursday, July 09, 2037',
        upcomingWebinar_type: "webinar",
        upcoming_webinar_title: "Metaverse",
        id: "23423423423423"
    },
    {
        date: 'Thursday, July 10, 2037',
        upcomingWebinar_type: "webinar2",
        upcoming_webinar_title: "Metaverse2",
        id: "234234234893423"
    }
]
//Snapshot Test 
it("Upcoming Webinars renders as expected", () => {
    render(<UpcomingWebinars upcoming={upcomingWebinarTestData} />)
});

test("Upcoming Webinars snapshot", () => {
    const { asFragment } = render(<UpcomingWebinars upcoming={upcomingWebinarTestData} />)
    expect(asFragment()).toMatchSnapshot()
});

test("Upcoming Webinars Unit Testing", () => {
    const { getAllByRole} = render(<UpcomingWebinars upcoming={upcomingWebinarTestData} />)
    const listItems = getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
})
