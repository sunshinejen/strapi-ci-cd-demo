import React from 'react'
import { render, screen } from '@testing-library/react';
import PodcastFilter  from '../../components/podcast/Podcast_filter'


// smoke test
it("Renders PodcastFilter component without crashing", () => {
    render(<PodcastFilter/>)
})

test("PodcastFilter Unit Test", () => {
    // render component
    const { getByText} = render(<PodcastFilter/>)

    // Test existance of form Text in document
    expect(getByText('Latest Podcasts')).toBeInTheDocument()
    expect(getByText('Search By Year')).toBeInTheDocument()
    expect(getByText('All')).toBeInTheDocument()
    expect(getByText('2022')).toBeInTheDocument()
    expect(getByText('2021')).toBeInTheDocument()

    //Test for icons in document
    expect(screen.getByTestId('thumbnail-icon').id).toBe("thumbNail")
    expect(screen.getByTestId('list-view-icon').id).toBe("list")
})

