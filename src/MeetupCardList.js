import React, { Component } from 'react';
import MeetupCard from './MeetupCard';
import EventPresenter from './EventPresenter'

class MeetupCardList extends Component {
  constructor() {
    super();
    this.state = { meetupEvents: [] };
  }
  componentDidMount() {
    const oneThing = {"utc_offset":-18000000,"venue":{"zip":"52240","country":"us","localized_country_name":"USA","city":"Iowa City","address_1":"201 S. Clinton Street","name":"Old Capitol Town Center","lon":-91.5354,"id":1242477,"state":"IA","lat":41.6593,"repinned":false},"headcount":0,"visibility":"public","waitlist_count":0,"created":1430752139000,"maybe_rsvp_count":0,"description":"<p><b>**We meet in University of Iowa ITS Room #2951 in the Old Capitol Mall.**</b></p> <p>Join us for lunch and Ruby discussion! There are quite a few Ruby and Rails developers in the area, and we'd love it if you could join us!</p> <p>We normally give short talks for other Rubyists in the community. Sometimes someone has something to present, other times we discuss the latest Ruby news.</p> <p>Speakers are always welcome! Please feel free to bring your pet project to show off or discuss a Ruby-related problem you solved at work.</p>","how_to_find_us":"On the second floor, above Seoul Grill. If you're heading towards the parking ramp, there's a door for ITS. We meet in a meeting room immediately inside.","event_url":"https://www.meetup.com/techcorridorio/events/lptvglywmbkb/","yes_rsvp_count":1,"name":"[Ruby] Thursday Lunch","id":"lptvglywmbkb","time":1504803600000,"updated":1430752139000,"group":{"join_mode":"open","created":1303346465000,"name":"techcorridor.io","group_lon":-91.55999755859375,"id":1818335,"urlname":"techcorridorio","group_lat":41.650001525878906,"who":"Techies"},"status":"upcoming"};
    const meetupEvent = EventPresenter(oneThing);
    this.setState({meetupEvents: [meetupEvent]});
  }
  render() {
    if (this.state.meetupEvents) {
      return (
        <div>
          {this.state.meetupEvents.map((meetupEvent) =>
            <MeetupCard meetupEvent={meetupEvent} />
          )}
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default MeetupCardList;
