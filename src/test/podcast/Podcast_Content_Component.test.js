import React from 'react'
import { render, screen, fireEvent, queryByText } from '@testing-library/react';
import Podcast  from '../../components/podcast/podcastcontent'

// podcast test data
import podcastData from './/test_data';

// smoke test
it("Renders PodcastContent  without crashing", () => {
    render(<Podcast podcastData={[podcastData[0]]}/>)
})

// Podcast content Integration test
test("Podcast Content Integration Test", () => {
    // render podcast content
    const { getByText, queryByText} = render(<Podcast podcastData={podcastData}/>)

    // Test existance of Text in document
    expect(getByText("My Le Goel (HU '04)")).toBeInTheDocument()
    expect(getByText("Aran Khanna (HU '16)")).toBeInTheDocument()
    expect(getByText('Laura Butler')).toBeInTheDocument()
    expect(getByText("Bridget Frey (HU '99)")).toBeInTheDocument()
    expect(getByText("Steven Maheshwary (HU '12)")).toBeInTheDocument()

    ///////////////////Test Toggle Display Functionality//////////////////////

    //click on list view button to toggle display
    fireEvent.click(screen.getByTestId('list-view-icon'))

    // Test list view display text in document
    expect(getByText("Harvard in Tech Seattle Podcast Episode 8 - Fatoumata Fall (HU '14)")).toBeInTheDocument()
    expect(getByText("Harvard in Tech Seattle Podcast Episode 2 - My Le Goel (HU '04)")).toBeInTheDocument()
    expect(getByText("Harvard in Tech Seattle Podcast Episode 3 - Bridget Frey (HU '99)")).toBeInTheDocument()
    expect(getByText("Harvard in Tech Seattle Podcast Episode 4 - Laura Butler")).toBeInTheDocument()

    // click on thumbNail button to change display back to thumbNail
    fireEvent.click(screen.getByTestId('thumbnail-icon'))

    // Test non existance of list view display
    expect(queryByText("Harvard in Tech Seattle Podcast Episode 1 - Steven Maheshwary")).toEqual(null)
    expect(queryByText("Harvard in Tech Seattle Podcast Episode 3 - Bridget Frey")).toEqual(null)
    expect(queryByText("Harvard in Tech Seattle Podcast Episode 4 - Laura Butler")).toEqual(null)
    expect(queryByText("Harvard in Tech Seattle Podcast Episode 5 - Aran Khanna")).toEqual(null)
    expect(queryByText("Harvard in Tech Seattle Podcast Episode 7 - Ziad Ismail (HBS 04)")).toEqual(null)
    expect(queryByText("Harvard in Tech Seattle Podcast Episode 5 - Spencer Rascoff")).toEqual(null)
 
    // Test thumbnail display in document
    expect(getByText("My Le Goel (HU '04)")).toBeInTheDocument()
    expect(getByText("CEO and Founder Flight Live Inc.")).toBeInTheDocument()

    expect(getByText("Steven Maheshwary (HU '12)")).toBeInTheDocument()
    expect(getByText("Director of Economic Development - IT, Washington State")).toBeInTheDocument()

    expect(getByText("Bridget Frey (HU '99)")).toBeInTheDocument()
    expect(getByText("Chief Technology Officer Redfin")).toBeInTheDocument()

    expect(getByText("Laura Butler")).toBeInTheDocument()
    expect(getByText("CEO and Co-founder UpLift Group Inc.")).toBeInTheDocument()

    expect(getByText("Aran Khanna (HU '16)")).toBeInTheDocument()
    expect(getByText("CEO and Co-founder Reserved.ai")).toBeInTheDocument()
})


// Podcast Filter functionaly test
test("Podcast Filter functionality Test", () => {
    // render podcast content
    const { getByText, getAllByText, queryByText, debug, getByTestId, getAllByTestId } = render(<Podcast podcastData={podcastData}/>)
    
    /////////////////// Test Filter Functionality //////////////////////

    // Select filter by year option 2021.
    fireEvent.change(getByTestId('searchByYear-form'), { target: { value: '2021' } })
    
    // Test 2021 is slected.
    const options = getAllByTestId('select-option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    expect(options[3].selected).toBeTruthy();

    // test for podcast created in 2021 only to be in document
    expect(getByText("Steven Maheshwary (HU '12)")).toBeInTheDocument()
    expect(getByText("Director of Economic Development - IT, Washington State")).toBeInTheDocument()

    expect(getByText("Bridget Frey (HU '99)")).toBeInTheDocument()
    expect(getByText("Chief Technology Officer Redfin")).toBeInTheDocument()

    expect(getAllByText("CEO and Founder Flight Live Inc.")[0]).toBeInTheDocument()
    expect(getAllByText("My Le Goel (HU '04)")[0]).toBeInTheDocument()

    // test for podcast create in 2022 not to be in document
    expect(queryByText("Laura Butler")).toEqual(null)
    expect(queryByText("CEO and Co-founder UpLift Group Inc.")).toEqual(null)

    expect(queryByText("Aran Khanna (HU 16)")).toEqual(null)
    expect(queryByText("CEO and Co-founder Reserved.ai")).toEqual(null)

    expect(queryByText("Ziad Ismail (HBS 04)")).toEqual(null)
    expect(queryByText("Chief Product Officer of Convoy")).toEqual(null)

    
    // Select filter by year option 2022.
    fireEvent.change(getByTestId('searchByYear-form'), { target: { value: '2022' } })
    
    // Test 2022 is slected.
    const option = getAllByTestId('select-option')
    expect(option[0].selected).toBeFalsy();
    expect(option[1].selected).toBeFalsy();
    expect(option[2].selected).toBeTruthy();
    expect(option[3].selected).toBeFalsy();

    // test for podcast created in 2022 only to be in document
    expect(getByText("Laura Butler")).toBeInTheDocument()
    expect(getByText("CEO and Co-founder UpLift Group Inc.")).toBeInTheDocument()

    expect(getByText("Aran Khanna (HU '16)")).toBeInTheDocument()
    expect(getByText("CEO and Co-founder Reserved.ai")).toBeInTheDocument()

    expect(getByText("Ziad Ismail (HBS '04)")).toBeInTheDocument()
    expect(getByText("Chief Product Officer Convoy")).toBeInTheDocument()

    // test for podcast created in 2021 not to be in document
    expect(queryByText("Steven Maheshwary (HU '12)")).toEqual(null)
    expect(queryByText("Director of Economic Development - IT, Washington State")).toEqual(null)

    expect(queryByText("Bridget Frey (HU 99)")).toEqual(null)
    expect(queryByText("Chief Technology Officer Redfin")).toEqual(null)
})