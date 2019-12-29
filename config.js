var config = {
    style: 'mapbox://styles/vzpi/ck4q5subw0v2l1cmphq7aitcz',
    accessToken: 'pk.eyJ1IjoidnpwaSIsImEiOiJjazRvaHViZ2kxcHdtM2pvZ21tdG90YTN3In0.i12GeLMjHHmBGpuTTSZsFQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Danskammer Power Plant',
    subtitle: "Wall Street's scheme to refuel a mothballed power plant with Pennsylvania's Marcellus Shale fracked gas",
    byline: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    footer: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    chapters: [
        {
            id: 'section 1',
            title: 'The Danskammer Power Plant, New York State, 2019',
            image: 'https://i.imgur.com/7AGvd6V.png',
            description: 'text',
            location: {
                center: [-74.35006, 41.37288],
                zoom: 8.38,
                pitch: 0.00,
                bearing:0.00
            },
          
    onChapterEnter: [
      {
          layer: 'danskammer-pt',
          opacity: 1
      },
    ],
    onChapterExit: [
      {
          layer: 'danskammer-pt',
          opacity: 0.5
      },
    ]
},

          {
            id: 'section 2',
            title: 'Emissions Hotspot: the Roseton + Danskammer Plants',
            image: 'https://i.imgur.com/ifNWZDv.png',
            description: 'text, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, texttext, text, text',
            location: {
            	center: [-74.04912, 41.59372],
				zoom: 10.93,
				pitch: 0.00,
				bearing: 0.00
              
            },
    onChapterEnter: [
	  {
          layer: 'danskammer-pt',
          opacity: 1
      },

    ],
            onChapterExit: [
	  {
          layer: 'danskammer-pt',
          opacity: 0.5
      },
    ]
        },

        {
            id: 'third',
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.99389, 41.57964],
                zoom: 11.75,
                pitch: 0.00,
                bearing: -85.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};