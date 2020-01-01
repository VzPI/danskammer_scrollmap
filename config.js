var config = {
    style: 'mapbox://styles/vzpi/ck4utjm4n0ipb1dmqenmov4tw',
    accessToken: 'pk.eyJ1IjoidnpwaSIsImEiOiJjazRvaHViZ2kxcHdtM2pvZ21tdG90YTN3In0.i12GeLMjHHmBGpuTTSZsFQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Danskammer Power Plant',
    subtitle: "Wall Street's scheme to refuel a mothballed power plant with Pennsylvania's Marcellus Shale fracked gas",
    byline: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    footer: 'Visualizing Pipeline Impacts | @pipelineimpacts | all images, charts, and data analysis © VzPi unless otherwise noted.',
    chapters: [


    //section 1
        {
            id: 'section-1',
            title: 'The Danskammer Power Plant, New York State, 2019',
            image: 'https://i.imgur.com/rvGp6NJ.png',
            description: '<p>Situated on the western shore of the Hudson River 50 miles north of New York City lies a decrepit, barely operating, 20th century power plant - the Danskammer Plant. Tiger Infrastructure, a venture capital outfit with close ties to the far-right Trump agenda, intends to cobble together plant remnants, meld them with new turbines, a compressor, pipes and metering yards, bringing to life a 40-year, always-on frankensteinian fracked gas plant. But first a public test: Danskammer will be scrutinized under the newly minted Climate Leadership and Community Protection Act (CLCPA).</p><p>References:</p><p><a href="https://public-accountability.org/report/putting-the-scam-in-danskammer/">Putting the Scam in Danskammer</a></p>',
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
            image: 'https://i.imgur.com/J3gp6KW.png',
            description: 'Danskammer and its twin - the Roseton Plant - are lodged between three post-industrial cities - Newburgh, Beacon and Poughkeepsie. While the Roseton namplate capacity is twice that of the Danskammer proposal, the run time of both plants has dwindled dramatically over the past decade. In effect, both sit idle, existing to collect capacity payments - millions of ratepayer dollars per year - to maintain a few hours and days worth of peaker operation.<p>References:</p><p><a href="https://www.publicpower.org/system/files/documents/70%20RTO%20Capacity%20Markets%20and%20Their%20Impacts%20on%20Consumers%20and%20Public%20Power%20July%202019.pdf">RTO Capacity Markets and Their Impacts On Consumers and Public Power</a></p>',
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
            image: 'https://i.imgur.com/7FIh8Gx.png',
            description: 'Danskammer claims its new incarnation as a 24/7 baseline operation will produce FEWER emissions, more efficient emissions - this is demonstrably false. A newly realized Danskammer would deliver a 4,033% increase in CO2e emissions, from 47 thousand to nearly 2 million tons/year. Based on its historical operation trend, the intended sleight-of-hand is obvious: use a no-build scenario that reflects operations backdated to 2010, ignoring the operations reality of the last decade. Earth Justice has placed an excellent comment letter on the project docket that details this subterfuge.<p>References:</p><p><a href="https://docdro.id/Hak3Z20">Earth Justice Preliminary Scoping Statement Comment Letter 43/29/19</a></p>',
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
            title: 'Danskammer: the site design',
            image: 'https://i.imgur.com/47enOtA.png',
            description: 'DEC Releases Draft Flood Risk Management Guidance.  add in image - https://i.imgur.com/BvLC8P0.png',
            location: {
                center: [-73.97832, 41.57198],
                zoom: 15.40,
                pitch: 0.00,
                bearing: 3.00
            },
            onChapterEnter: [

 {
          layer: 'transmission-site',
          opacity: 1
      },

            ],
            onChapterExit: [

 {
          layer: 'transmission-site',
          opacity: 0.0
      },


            ]
        },

//section 5

        {
            id: 'section-5',
            title: 'Danskammer: the site design, cont.',
            image: 'https://i.imgur.com/BvLC8P0.png',
            description: 'DEC Releases Draft Flood Risk Management Guidance.  coal ash, tanks',
            location: {
                center: [-73.96709, 41.57173],
                zoom: 17.00,
                pitch: 0.00,
                bearing: -63.20
            },
            onChapterEnter: [

 {
          layer: 'transmission-inside',
          opacity: 0
      },

            ],
            onChapterExit: [

 {
          layer: 'transmission-inside',
          opacity: 0
      },


            ]
        },

//section 6

      {
            id: 'section-6',
            title: 'Danskammer: a case study in the proliferation of Hudson Valley fracked gas plants',
            image: 'https://i.imgur.com/wGeY7cg.png',
            description: 'Planning begets reality, and the gas industry has had its sights on New York State, particularly NYC, for all types and phases of gas infrastructure. Throughout the past decade, pipeline companies have aggressively pushed long-term, intensive end uses for their Marcellus Shale product, the prize being baseline power plants that consume huge amounts of gas on a FIRM contract basis. Indeed, their plans have largely proven effective, straddling the state with a toxic, non-renewable commitment that is proving month by month to be increasingly untenable in an era of rapid climate change.  Three plants - the CPV Plant in Middletown, the Cricket Valley Plant in Dover and now the Danskammer proposal near Newburgh are not happenstance; that are strategically arranged at the nexus of four interstate pipelines: Algonquin, Iroquois, Millennium, and the Tennessee Gas Pipeline (represented as blue lines on map).',   
                location: {
                center: [-79.34914, 42.54303],
                zoom: 6.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

      {
          layer: 'nys-pipe',
          opacity: 1
      },
      {
          layer: 'new-plants-txt',
          opacity: 1
      },
      {
          layer: 'new-plants',
          opacity: 1
      },
      {
          layer: 'nys',
          opacity: 0.45
      },
            ],
            onChapterExit: [

      {
          layer: 'nys-pipe',
          opacity: 0
      },
      {
          layer: 'new-plants-txt',
          opacity: 0
      },
      {
          layer: 'new-plants',
          opacity: 0
      },
      {
          layer: 'nys',
          opacity: 0
      },


            ]
        },
//section 7
 {
            id: 'section-7',
            title: "FERC: the federal agency responsible for gas proliferation in New York State",
            image: 'https://i.imgur.com/U4l7M9c.png',
            description: 'Ferc  capcity zone history. shown in the map is Zone G-J, also referred to as Zone NCZ (new capacity zone). transmission inside the zone coupled with the three plants that would not exist without the zone - CPV, Cricket Valley and Danskammer. Link to the CPV complaint document; text for trying to unravel the zone.  show the demand chart.  removal of zone = threat.  both cpv and cricket valley part of gold book assumptions',   
                location: {
                center: [-75.03286, 41.50591],
                zoom: 8.18,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

      {
          layer: 'new-plants-txt',
          opacity: 1
      },

      {
          layer: 'capacity-zone-in',
          opacity: .65
      },
      {
          layer: 'transmission-inside',
          opacity: 1
      },
      {
          layer: 'new-plants',
          opacity: 1
      },
      {
          layer: 'nys',
          opacity: 0
      },
            ],
            onChapterExit: [

      {
          layer: 'new-plants-txt',
          opacity: 1
      },

      {
          layer: 'capacity-zone-in',
          opacity: 0
      },
      {
          layer: 'transmission-inside',
          opacity: 0
      },
      {
          layer: 'new-plants',
          opacity: 0
      },
      {
          layer: 'nys',
          opacity: 0
      },


            ]
        },
//section 8
{
            id: 'section-8',
            title: "Upstate vs Downstate: a geographic split of unintented consequences",
            image: 'https://i.imgur.com/epN9ue9.png',
            description: 'Just as FERC forced upon New York State its deterministic capacity zone, it further severed upstate vs downstate.  the state has signifcant renewable capacity but it is constained north of the FERC mandated capacity zone.  NYSIO has recently begun to upgrade signficant portions. however, signifcant damage has bee done to insintivize gas infrastructure over renewables, largely due coordinated actions of the gas industry and FERC.',   
               location: {
                center: [-79.34914, 42.54303],
                zoom: 6.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

      {
          layer: 'new-plants-txt',
          opacity: 0
      },

      {
          layer: 'capacity-zone-in',
          opacity: 0
      },
      {
          layer: 'transmission-inside',
          opacity: 0
      },
      {
          layer: 'new-plants',
          opacity: 0
      },
      {
          layer: 'transmission-outside-220',
          opacity: 1
      },
      {
          layer: 'capacity-zone-out',
          opacity: .50
      },
            ],
            onChapterExit: [

      {
          layer: 'new-plants-txt',
          opacity: 0
      },

      {
          layer: 'capacity-zone-in',
          opacity: 0
      },
      {
          layer: 'transmission-inside',
          opacity: 0
      },
      {
          layer: 'new-plants',
          opacity: 0
      },
      {
          layer: 'transmission-outside-220',
          opacity: 0
      },
      {
          layer: 'capacity-zone-out',
          opacity: 0
      },


            ]
        },

//section 9

{
            id: 'section-9',
            title: "Danskammer's Defect: The Climate Leadership and Community Protection Act (CLCPA)",
            image: 'https://i.imgur.com/drjzMlu.png',
            description: "Contrary to conventional wisdom, New York State over the past decade has been largely ineffectual at stopping any significant fracked gas infrastructure. Yes, Constitution Pipeline was blocked in 2016, but it has been brought back to life in 2019 by none other than FERC.  Certainly the 2014 fracking moratorium was a significant environmental achievement, but in aggregate the state only possesses 0.03% of US gas reserves.  New York was, is, and will be for the foreseeable future a 'client state' primarily of Pennsylvania's Marcellus Shale gas. However, the state is nothing if not aspirational on emission targeting. With the passage of CLCPA as enforceable law in late 2019, the state was just handed a lethal tool in the fight to kill the Danskammer application while severely cutting short the meager life left in this 20th century Behemoth.  Like all fights, this one will require inordinate public pressure and determined legal opposition. Organizations that are leading the way on both counts are listed as follows, and noted on the map to the right.  The application itself is avaible for bulk download as noted below, as is the Public Service Commission's project docket for Danskammer.  Follow @pipelineimpacts for regular project analysis in early 2020.",  location: {
                center: [-79.34914, 42.54303],
                zoom: 6.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

      {
          layer: 'new-plants-txt',
          opacity: 0
      },

      {
          layer: 'capacity-zone-in',
          opacity: 0
      },
      {
          layer: 'transmission-inside',
          opacity: 0
      },
      {
          layer: 'new-plants',
          opacity: 0
      },
      {
          layer: 'transmission-outside-220',
          opacity: 1
      },
      {
          layer: 'capacity-zone-out',
          opacity: .50
      },
            ],
            onChapterExit: [

      {
          layer: 'new-plants-txt',
          opacity: 0
      },

      {
          layer: 'capacity-zone-in',
          opacity: 0
      },
      {
          layer: 'transmission-inside',
          opacity: 0
      },
      {
          layer: 'new-plants',
          opacity: 0
      },
      {
          layer: 'transmission-outside-220',
          opacity: 0
      },
      {
          layer: 'capacity-zone-out',
          opacity: 0
      },


            ]
        },


//end


    ]
};