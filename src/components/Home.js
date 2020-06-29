import React from "react";
import TwitterContainer from "./TwitterContainer";

export default function Home() {
  React.useEffect(() => {
    document.title = 'Rachel Hendery'
  })
  return (
    <div>
      <h1 className="title is-1" style={{marginTop: "-15px"}}>Rachel Hendery</h1>
      <p className="is-size-4 has-text-centered" style={{margin: "-30px 0 35px 0"}}>
        Western Sydney University, Humanities and Communication Arts, Faculty Member
      </p>
      <div className="columns">
        <div className="column is-8">
          <p>
            I am a linguist who works on language contact and change, particularly in the Pacific and Australia, and how new digital
            tools and techniques allow us to research these in new ways. My research interests span historical and contact linguistics,
            typology, and digital humanities areas, especially relating to mapping, simulation, language, virtual reality, and data visualisation.
          </p>
          <br />
          <p>
            I have carried out fieldwork in the Cook Islands, East Timor and Indonesia. I am currently lead CI on the ARC-funded project
            "Waves of Words: Mapping and Modelling Australia's Pacific Past", and a co-CI on several further ARC-funded projects: Howitt
            and Fison’s Archive: Insights into Australian Aboriginal Language, Kinship and Culture’ led by Helen Gardner at Deakin University,
            and Mapping Print; Charting Enlightenment, led by Simon Burrows at Western Sydney University. I am also a CI on the AHRC-funded project
            'Libraries, Reading Communities and Cultural Formation in the Eighteenth-Century Atlantic', led by Mark Towsey at the University of Liverpool.
          </p>
          <br />
          <p>
            I co-lead the Intergenerate Living Lab at Western Sydney University, where we work across generations, forms of expertise and
            places in co-research, design and testing of digital initiatives to foster the resilience of people and communities to live well
            and participate fully in social life.
          </p>
          <br />
          <p>
            I am also a member of the MARCS Institute for Brain, Behaviour and Development, and the Centre of Excellence for Language Dynamics.
            I am  the Treasurer for the Australasian Association of Digital Humanities and the NSW coordinator for the Australian Computational
            and Linguistics Olympiad.
          </p>
        </div>
        <div className="column is-offset-1">
          <TwitterContainer />
        </div>
      </div>
    </div>
  )
}
