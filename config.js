var config = {
    style: 'mapbox://styles/vzpi/ck4ry9x9f9afo1dpi8swfyve3',
    accessToken: 'pk.eyJ1IjoidnpwaSIsImEiOiJjazRvaHViZ2kxcHdtM2pvZ21tdG90YTN3In0.i12GeLMjHHmBGpuTTSZsFQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Danskammer Power Plant',
    subtitle: "Wall Street's scheme to refuel a mothballed power plant with Pennsylvania's Marcellus Shale fracked gas",
    byline: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    footer: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    chapters: [


    //section 1
        {
            id: 'section-1',
            title: 'The Danskammer Power Plant, New York State, 2019',
            image: 'https://i.imgur.com/7AGvd6V.png',
            description: '<p>Situated on the western shore of the Hudson River 50 miles north of New York City lies a decrepit, barely operating, 20th century power plant - the Danskammer Plant. Tiger Infrastructure, a venture capital outfit with close ties to the far-right Trump agenda, intends to cobble together plant remnants, meld them with new turbines, a compressor, pipes and metering yards, bringing to life a 40-year, always-on frankensteinian fracked gas plant. But first a public test: Danskammer will be scrutinized under the newly minted Climate Leadership and Community Protection Act (CLCPA).</p><p>References:</p><p><a href="https://public-accountability.org/report/putting-the-scam-in-danskammer/">Putting the Scam in Danskammer</a></p><p><a href="http://documents.dps.ny.gov/public/MatterManagement/CaseMaster.aspx?MatterCaseNo=18-F-0325&submit=Search">New York State Department of Public Service Danskammer Docket</a></p>',
            location: {
                center: [-74.35006, 41.37288],
                zoom: 8.38,
                pitch: 0.00,
                bearing:0.00
            },
          
    onChapterEnter: [
      {
          layer: 'danskammer-pt',
          opacity: 1,
      },
      {
          layer: 'nyrank1',
          opacity: 1
      },
                    ],
    onChapterExit:  [
      {
        layer: 'danskammer-pt',
          opacity: 0,
      },
      {
          layer: 'nyrank1',
          opacity: 0
      },
                    ]
      },

//section 2
      {
            id: 'section-2',
            title: 'Not one, but two plants: Roseton + Danskammer',
            image: 'https://i.imgur.com/ifNWZDv.png',
            description: 'Situated between three post-industrial cities - Newburgh, Beacon and Poughkeepsie - lies two plants, Roseton and Danskammer. While the Roseton namplate capacity is twice that of the Danskammer proposal, the run time of both plants has dwindled to just days per year. In effect, both exist to collect capacity payments - millions of ratepayer dollars per year - to maintain stand-by peaker status.<p>References:</p><p><a href="https://www.publicpower.org/system/files/documents/70%20RTO%20Capacity%20Markets%20and%20Their%20Impacts%20on%20Consumers%20and%20Public%20Power%20July%202019.pdf">RTO Capacity Markets and Their Impacts On Consumers and Public Power</a></p>',
            location: {
            	center: [-74.04912, 41.59372],
				zoom: 10.93,
				pitch: 0.00,
				bearing: 0.00
              
            },
    onChapterEnter: [
   
	  {
          layer: '2-plant-pts',
          opacity: 1
      },
    {
          layer: 'nyrank1',
          opacity: 1
      },

                    ],
    onChapterExit:  [
	  {
          layer: '2-plant-pts',
          opacity: 0
      },
    {
          layer: 'nyrank1',
          opacity: 0
      },
                    ]
        },

//section 3
         {
            id: 'section-3',
            title: 'Emissions Hotspot: the Roseton + Danskammer Plants',
            image: 'https://i.imgur.com/yChOISK.jpg',
            description: "Danskammer claims its new incarnation as a 24/7 baseline operation will produce FEWER emissions, more efficient emissions - this is demonstrably false. A newly realized Danskammer would deliver a 4,033% increase in CO2e emissions, from 47 thousand to nearly 2 million tons/year. Based on Danskammer's historical operation trend, the intended sleight-of-hand is obvious: use a 'no build' scenario that reflects operations backdated to 2010, ignoring the operations reality of the last decade.",
            location: {
              center: [-73.97349, 41.56167],
        zoom: 14.00,
        pitch: 0.00,
        bearing: -62.40
              
            },
    onChapterEnter: [
    {
          layer: '2-plant-pts',
          opacity: 1
      },
    {
          layer: '2-plant-txt',
          opacity: 1
      },

                    ],
            onChapterExit: [
    {
          layer: '2-plant-pts',
          opacity: 0
      },
      {
          layer: '2-plant-txt',
          opacity: 0
      },
    ]
        },
//section 4

        {
            id: 'section-4',
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
        },
    ]
};