import React from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function TwitterContainer() {
  return (
    <div>
      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="RHendery"
      options={{height: 500}}
      />
    </div>
  )
}
