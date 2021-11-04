using System.Collections.Generic;
using SP21.P05.Web.Features.Events;

namespace SP21.P05.Web.Features.Venues
{
    public class Venue
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Capacity { get; set; }

        public virtual ICollection<Event> Events { get; set; } = new List<Event>();
    }
}