import React from 'react'
import { render, screen } from '@testing-library/react';
import PodcastLinks  from '../../components/podcast/Podcast_links'

// smoke test
it("Renders PodcastLinks component without crashing", () => {
    render(<PodcastLinks soundCloud='soundcloud.url'
        spotify='spotify.url' podcasts='apple.url'
    />)
})

// Snapshot Test. Test will nofify dev if component is modified.
test("component matches snapshot", () => {
    const { asFragment } = render(<PodcastLinks />)
    expect(asFragment()).toMatchSnapshot()
})


test("PodcastLinks Unit Test", () => {
    // render component with href props.
    render(<PodcastLinks 
        soundCloud='soundcloud.url_unitTest'
        spotify='spotify.url_unitTest'
        podcasts='apple.url_unitTest'
    />)

    // Test for href link in Document.
    expect(screen.getByTestId('soundCloud-link').href).toBe("http://localhost/soundcloud.url_unitTest")
    expect(screen.getByTestId('spotify-link').href).toBe("http://localhost/spotify.url_unitTest")
    expect(screen.getByTestId('apple-link').href).toBe("http://localhost/apple.url_unitTest")
})

  