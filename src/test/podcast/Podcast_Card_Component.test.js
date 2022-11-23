import React from 'react'
import { render, screen } from '@testing-library/react';
import PodcastCard  from '../../components/podcast/Podcast_card'

// smoke test
it("Renders PodcastCard component without crashing", () => {
    render(<PodcastCard 
        img='smoke test image'
        guestName='smoke test title'
        description='smoke test description'
        guestTitle='smoke test summary'
        Links={{SoundCloud:'soundcloud_link', 
        spotify:'spotify_link', podcasts:'apple_link'}}
    />)
})


test("PodcastCard Unit Test", () => {
    // render component
    const { getByText} = render(<PodcastCard 
        // img='unit test image'
        guestName='unit test title'
        description='Unit test description'
        guestTitle='Unit test summary'
        Links={{soundCloud:'soundcloud_link', 
        spotify:'spotify_link', podcasts:'apple_link'}}
    />)


    // Test existance of Text in document
    expect(getByText('unit test title')).toBeInTheDocument()
    expect(getByText('Unit test description')).toBeInTheDocument()
    expect(getByText('Unit test summary')).toBeInTheDocument()

    expect(screen.getByTestId('apple-link').href).toBe( "http://localhost/apple_link")
    expect(screen.getByTestId('soundCloud-link').href).toBe( "http://localhost/soundcloud_link")
    expect(screen.getByTestId('spotify-link').href).toBe( "http://localhost/spotify_link")
})
