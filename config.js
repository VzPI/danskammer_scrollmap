var config = {
    style: 'mapbox://styles/data-maps/cjejfzobh4dlm2rqphkdjnm2o',
    accessToken: 'pk.eyJ1IjoiZGF0YS1tYXBzIiwiYSI6ImNqZWpmeXhoajNtb2Eyd3FldG93OGpxejgifQ.xzOcuUd0LChdzHktllsAHw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'The Danskammer Power Plant',
    subtitle: "Wall Street's scheme to refuel a mothballed power plant with Pennsylvania's Marcellus Shale fracked gas",
    byline: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    footer: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Danskammer and Roseton Power Plants (left to right)',
            image: 'https://i.imgur.com/VIOmjml.jpg',
            description: '70 miles north of New York City two 20th century power plants stradle the western shore of the Hudson River.  These two plants - the Roseton ',
            location: {
                center: [-73.96702, 41.64499],
                zoom: 6.75,
                pitch: 15.00,
                bearing:10.40
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.96960, 41.57377],
                zoom: 15.21,
                pitch: 36.00,
                bearing: -74.40
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};