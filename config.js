var config = {
    style: 'mapbox://styles/vzpi/ck4wzccfjmaa81co25x3zx31w',
    accessToken: 'pk.eyJ1IjoidnpwaSIsImEiOiJjazRvaHViZ2kxcHdtM2pvZ21tdG90YTN3In0.i12GeLMjHHmBGpuTTSZsFQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Danskammer Power Plant',
    subtitle: "Wall Street's scheme to refuel a mothballed power plant with Pennsylvania's Marcellus Shale fracked gas",
    byline: 'Visualizing Pipeline Impacts | @pipelineimpacts',
    footer: 'Visualizing Pipeline Impacts | @pipelineimpacts | all images, charts, and data analysis © VzPi, 2020, unless otherwise noted.',
    chapters: [


    //section 1
      {
            id: 'section-1',
            title: 'The Danskammer Power Plant, New York State, 2020',
            image: 'https://i.imgur.com/rvGp6NJ.png',
            description: '<p>Situated on the western shore of the Hudson River 50 miles north of New York City lies a decrepit, barely operating, 20th century power plant - the Danskammer Plant. Tiger Infrastructure, a venture capital outfit with close ties to the far-right Trump agenda, intends to cobble together plant remnants, meld them with new turbines, a compressor, pipes and a significantly expanded metering yard, bringing to life a 30-year, always-on <i>energy center</i>. But first a public test: Danskammer will be scrutinized under the newly minted Climate Leadership and Community Protection Act (CLCPA).</p><p>References:</p><p><a href="https://public-accountability.org/report/putting-the-scam-in-danskammer/">Putting the Scam in Danskammer</a></p>',
            location: {
                center: [-74.382268, 41.373323],
                zoom: 8.00,
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
        zoom: 10.70,
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
            description: 'Danskammer claims its new incarnation as a 24/7 baseline <i>energy center</i> will produce FEWER emissions, more efficient emissions - this is demonstrably false. A newly realized Danskammer would deliver a 4,033% increase in CO2e emissions, from 47 thousand to nearly 2 million tons/year. Based on its historical operation trend, the intended sleight-of-hand is obvious: use a no-build scenario that reflects operations backdated to 2010, ignoring the operations reality of the last decade. Earth Justice has placed an excellent comment letter on the project docket that details this subterfuge.<p>References:</p><p><a href="https://docdro.id/Hak3Z20">Earth Justice Preliminary Scoping Statement Comment Letter 43/29/19</a><p><a href="https://www.eia.gov/electricity/data/eia923/">Chart Based on EPA 923 filings for Danskammer Power Plant</a></p></p>',
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
            title: 'The Danskammer Site Plan: expediency over sound design',
            image: 'https://i.imgur.com/47enOtA.png',
            description: 'Straddling the CSX Transportation River Subdivision train tracks, the Danskammer <i>Energy Center</i> would be grafted onto existing infrastructure, slightly southwest of the orange-brown structure in application graphic above. Seemingly this erratic site design is being advanced to prioritize two critical inputs over all else: an existing 12-inch Central Hudson Gas & Electric steel gas pipe and the 115-kilovolt powerlines  necessary to output generation back onto the grid (represented as blue lines in the map to the right).  Little is disclosed about site design and alterations beyond the blanket statement <i>Certain existing Station structures, buildings, fixtures, and other improvements will be removed to accommodate the siting and construction of new Project components</i>, totaling a proposed demolition budget of 7 million.',
            location: {
                center: [-73.972596, 41.573678],
                zoom: 15.50,
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
            title: "Danskammer's past portends a precarious future",
            image: 'https://i.imgur.com/JMpGZ86.png',
            description: "Danskammer's coal past predominates present site conditions.  By way of comparison, the ash pits that were active in this 1994 UGSG aerial image would undergird Danskammer's grafted  <i>energy center</i>. While Danskammer reassures the public that its ash pits are 'fully monitored', there is scant information in the application regarding their mitigation and final cleanup.  As is well known, the plant was inundated by Hurricane Sandy, yet Danskammer elects to construct in the same location with the unconvincing assertion that new facilities will remain outside of the 100-year floodplain and account for NYSDEC 2017 sea level rise guidance.  Nowhere in the application is there even the mention of storm surge inundation from a signifcant weather event - highly likely across the next 30 years of rapid climate change.",
            location: {
                center: [-73.966811, 41.572549],
                zoom: 16.00,
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
            description: "Planning begets reality, and the gas industry has had its sights on New York State, particularly the New York City region, for every possible combination and phase of gas infrastructure. Throughout the past decade, pipeline companies have aggressively pushed long-term, intensive end uses for their Marcellus Shale product, the prize being baseline power plants that consume huge amounts of gas on a FIRM contract basis. Three plants - the CPV Plant in Middletown, the Cricket Valley Plant in Dover and now the Danskammer proposal near Newburgh are not happenstance; that are strategically arranged at the nexus of four interstate pipelines: Algonquin, Iroquois, Millennium, and the Tennessee Gas Pipeline (all represented by the gray lines on map at right). The image above was captured from a 2011 Millennium Pipeline, LLC planning document.  While their 'Secondary Power Plant Development Area' hasn't panned out yet, the primary one certainly has.",   
                location: {
                center: [-78.297393, 42.493005],
                zoom: 6.00,
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
            description: "FERC, The Federal Energy Regulatory Commission, is the primary driver of both gas pipelines and the markets in which they operate. Even as they hand over operation of the markets to RTOs (Regional Transmission Organizations), FERC has ultimate jurisdiction.  In 2014, FERC established the 'NCZ' (New Capacity Zone), what is referred today as the 'G-J Zone', covering all of New York's 5 boroughs and northern territories into Hudson Valley. In the map at right, the grey-blue territory is the zone; the bright blue lines represent transmission lines in the zone.  The G-J Zone was hotly contested by New York State as it would, and indeed has, raised rates precipitously in 'downstate' New York.  Not by accident, this is where fracked gas plants have proliferated simply because they can make huge profits on the zone's inflated rate - exactly Danskammer's intention. All the while, the actual demand for the capacity these plants provide remains steady or decreases year over year. As seen in the chart above based on NYSIO 2019 demand  modeling in the G-J zone (inclusive of the Indian Point Nuclear Plant 2020-21 closure), it is not until the year XX when a modest demand case appears.",  location: {
                center: [-74.930024, 41.511727],
                zoom: 7.50,
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
          opacity: 0.65
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
            description: 'Just as FERC forced upon New York State a deterministic capacity zone, ironically it exacerbated the very thing it obstensibly tried to solve: long term energy capacity.  The state has signifcant renewable capacity but it is constained north of the FERC mandated capacity zone.  NYSIO has recently begun to upgrade signficant portions. however, signifcant damage has bee done to insintivize gas infrastructure over renewables, largely due coordinated actions of the gas industry and FERC.',   
               location: {
                center: [-78.297393, 42.493005],
                zoom: 6.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

      {
          layer: 'new-plants-txt',
          opacity: 1
      },

      {
          layer: 'capacity-zone-in-line',
          opacity: 1
      },
      {
          layer: 'transmission-inside-light',
          opacity: 1
      },
      {
          layer: 'new-plants',
          opacity: 1
      },
      {
          layer: 'transmission-outside-220',
          opacity: 1
      },
      {
          layer: 'capacity-zone-out',
          opacity: 0.50
      },
            ],
            onChapterExit: [

      {
          layer: 'new-plants-txt',
          opacity: 0
      },

      {
          layer: 'capacity-zone-in-line',
          opacity: 0
      },
      {
          layer: 'transmission-inside-light',
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
            description: 'Contrary to conventional wisdom, New York State over the past decade has been largely ineffectual at stopping any significant fracked gas infrastructure. Yes, Constitution Pipeline was blocked in 2016, but it has been brought back to life in 2019 by none other than FERC.  Certainly the 2014 fracking moratorium was a significant environmental achievement, but in aggregate the state only possesses 0.03% of US gas reserves.  New York was, is, and will be for the foreseeable future a client state primarily of Pennsylvania Marcellus Shale gas. However, the state is nothing if not aspirational on emission targeting. With the passage of CLCPA as enforceable law in late 2019, the state was just handed a lethal tool in the fight to kill the Danskammer application while severely cutting short the meager life left in this twentieth century Behemoth.  Like all fights, this one will require inordinate public pressure and determined legal opposition. Organizations that are leading the way on both counts are listed as follows, and noted on the map to the right.  The application itself is avaible for bulk download as noted below, as is the Public Service Commission project docket for Danskammer.  Follow @pipelineimpacts for regular project analysis in early 2020.</p><p>References:</p><p><a href="https://www.nycommunities.org/issues/climate/">NY Communities for Change</a></p><p><a href="https://www.nrdc.org/">NRDC</a></p><p><a href="https://www.foodandwaterwatch.org/office-location/new-york">Food & Water Watch</a></p><p><a href="https://www.clearwater.org/">Hudson River Sloop Clearwater</a></p><p><a href="https://www.nypirg.org/">NYPIRG</a></p><p><a href="https://earthjustice.org/">Earth Justice</a></p><p><a href="https://www.riverkeeper.org/">Hudson Riverkeeper</a></p>',  
                location: {
                center: [-74.292456, 41.172417],
                zoom: 8.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
      {
          layer: 'org1-txt',
          opacity: 1
      },
      {
          layer: 'org2-txt',
          opacity: 1
      },
      {
          layer: 'org1',
          opacity: 1
      },
      {
          layer: 'org2',
          opacity: 1
      },
      {
          layer: 'danskammer-solo',
          opacity: 1
      },
      {
          layer: 'danskammer-solo-txt',
          opacity: 1
      },
            ],
            onChapterExit: [
      {
          layer: 'org1-txt',
          opacity: 0
      },
      {
          layer: 'org2-txt',
          opacity: 0
      },
      {
          layer: 'org1',
          opacity: 0
      },
      {
          layer: 'org2',
          opacity: 0
      },
      {
          layer: 'danskammer-solo',
          opacity: 0
      },
      {
          layer: 'danskammer-solo-txt',
          opacity: 0
      },
            ]
        },
//end
    ]
};