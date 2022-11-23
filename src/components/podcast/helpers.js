// Podcast component Helper functions 

class PodcastHelpers{
    // filter podcast by input.
    static filter(filter, setPodcast, podcastCopy, setPodcastList) {
        if(filter === 'Search By Year'){
            setPodcastList(podcastCopy.slice(1, 7))
        }else if (filter === 'all'){
            setPodcastList([...podcastCopy])
        } else{
            const output = podcastCopy.filter(item => item.createdAt === filter)
            setPodcastList(output)
        }
    }
}
export  default PodcastHelpers