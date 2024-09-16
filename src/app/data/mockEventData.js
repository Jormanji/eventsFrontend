const mockEventData = {
  events: [
    {
      id: "1",
      name: { text: "Writing Workshop" },
      description: { text: "Improve your writing skills with expert guidance." },
      start: { local: "2024-05-01T10:00:00" },
      end: { local: "2024-05-01T12:00:00" },
      url: "https://www.eventbrite.com/e/writing-workshop-1234567890",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "City Library", 
        address: { 
          address_1: "123 Library St",
          city: "New York",
          region: "NY",
          postal_code: "10001",
          country: "US"
        },
        latitude: "40.712776",
        longitude: "-74.005974"
      },
      logo: { url: "/Writing-Workshop.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 2500, // $25.00
          },
          free: false,
        },
      ],
    },
    {
      id: "2",
      name: { text: "Rock Concert" },
      description: { text: "Join us for an evening of rock music!" },
      start: { local: "2024-06-15T19:00:00" },
      end: { local: "2024-06-15T22:00:00" },
      url: "https://www.eventbrite.com/e/rock-concert-2345678901",
      is_free: false,
      category: { id: "104", name: "Music" },
      venue: { 
        name: "Madison Square Garden", 
        address: { 
          address_1: "4 Pennsylvania Plaza",
          city: "New York",
          region: "NY",
          postal_code: "10001",
          country: "US"
        },
        latitude: "40.7505045",
        longitude: "-73.9934387"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 5000, // $50.00
          },
          free: false,
        },
        {
          name: "VIP Admission",
          cost: {
            currency: "USD",
            value: 15000, // $150.00
          },
          free: false,
        },
      ],
    },
    {
      id: "3",
      name: { text: "Author Meet-Up" },
      description: { text: "Meet your favorite authors and get your books signed." },
      start: { local: "2024-07-20T15:00:00" },
      end: { local: "2024-07-20T17:00:00" },
      url: "https://www.eventbrite.com/e/author-meet-up-3456789012",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Bookstore Central", 
        address: { 
          address_1: "456 Book St",
          city: "San Francisco",
          region: "CA",
          postal_code: "94102",
          country: "US"
        },
        latitude: "37.774929",
        longitude: "-122.419418"
      },
      logo: { url: "/Author-Signing.jpg" },
    },
    {
      id: "4",
      name: { text: "Food Truck Festival" },
      description: { text: "A variety of food trucks offering delicious cuisine." },
      start: { local: "2024-08-05T11:00:00" },
      end: { local: "2024-08-05T15:00:00" },
      url: "https://www.eventbrite.com/e/food-truck-festival-4567890123",
      is_free: true,
      category: { id: "105", name: "Food & Drink" },
      venue: { 
        name: "Central Park", 
        address: { 
          address_1: "789 Park Ave",
          city: "New York",
          region: "NY",
          postal_code: "10024",
          country: "US"
        },
        latitude: "40.785091",
        longitude: "-73.968285"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "5",
      name: { text: "Book Club Meetup" },
      description: { text: "Join our weekly book club and discuss the latest reads." },
      start: { local: "2024-09-10T18:00:00" },
      end: { local: "2024-09-10T20:00:00" },
      url: "https://www.eventbrite.com/e/book-club-meetup-5678901234",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Downtown Library", 
        address: { 
          address_1: "101 Library Ln",
          city: "Los Angeles",
          region: "CA",
          postal_code: "90012",
          country: "US"
        },
        latitude: "34.052235",
        longitude: "-118.243683"
      },
      logo: { url: "/Book-Image.jpg" },
    },
    {
      id: "6",
      name: { text: "Tech Conference 2024" },
      description: { text: "Explore the latest in technology and innovation." },
      start: { local: "2024-10-22T09:00:00" },
      end: { local: "2024-10-22T17:00:00" },
      url: "https://www.eventbrite.com/e/tech-conference-2024-6789012345",
      is_free: false,
      category: { id: "106", name: "Technology" },
      venue: { 
        name: "Convention Center", 
        address: { 
          address_1: "789 Tech St",
          city: "San Francisco",
          region: "CA",
          postal_code: "94103",
          country: "US"
        },
        latitude: "37.774929",
        longitude: "-122.419418"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "Early Bird",
          cost: {
            currency: "USD",
            value: 10000, // $100.00
          },
          free: false,
        },
        {
          name: "Standard",
          cost: {
            currency: "USD",
            value: 20000, // $200.00
          },
          free: false,
        },
      ],
    },
    {
      id: "7",
      name: { text: "Norwich Book Fair" },
      description: { text: "Explore a wide range of books and meet local authors." },
      start: { local: "2024-03-14T10:00:00" },
      end: { local: "2024-03-14T16:00:00" },
      url: "https://www.eventbrite.com/e/norwich-book-fair-1234567891",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Norwich Community Center", 
        address: { 
          address_1: "78 Chapel Field",
          city: "Norwich",
          region: "Norfolk",
          postal_code: "NR2 1SF",
          country: "GB"
        },
        latitude: "52.630886",
        longitude: "1.297355"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "8",
      name: { text: "Paris Literature Festival" },
      description: { text: "Join literary discussions with renowned authors in Paris." },
      start: { local: "2024-04-10T09:00:00" },
      end: { local: "2024-04-12T17:00:00" },
      url: "https://www.eventbrite.com/e/paris-literature-festival-2345678902",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Paris Expo Porte de Versailles", 
        address: { 
          address_1: "1 Place de la Porte de Versailles",
          city: "Paris",
          region: "Île-de-France",
          postal_code: "75015",
          country: "FR"
        },
        latitude: "48.832829",
        longitude: "2.287272"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "EUR",
            value: 3000, // €30.00
          },
          free: false,
        },
      ],
    },
    {
      id: "9",
      name: { text: "San Francisco Poetry Slam" },
      description: { text: "Witness powerful performances from local poets." },
      start: { local: "2024-05-05T19:00:00" },
      end: { local: "2024-05-05T22:00:00" },
      url: "https://www.eventbrite.com/e/sf-poetry-slam-3456789013",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Poetry Central", 
        address: { 
          address_1: "789 Poetry Ln",
          city: "San Francisco",
          region: "CA",
          postal_code: "94102",
          country: "US"
        },
        latitude: "37.774929",
        longitude: "-122.419418"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "10",
      name: { text: "Norwich History Book Club" },
      description: { text: "Join fellow history enthusiasts for a lively discussion." },
      start: { local: "2024-07-15T18:00:00" },
      end: { local: "2024-07-15T20:00:00" },
      url: "https://www.eventbrite.com/e/norwich-history-book-club-4567890124",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Norwich Historical Society", 
        address: { 
          address_1: "22 Elm Hill",
          city: "Norwich",
          region: "Norfolk",
          postal_code: "NR3 1HG",
          country: "GB"
        },
        latitude: "52.631723",
        longitude: "1.302244"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "11",
      name: { text: "San Francisco Cookbook Launch" },
      description: { text: "Sample recipes and get a signed copy of the latest cookbook." },
      start: { local: "2024-08-20T17:00:00" },
      end: { local: "2024-08-20T19:00:00" },
      url: "https://www.eventbrite.com/e/sf-cookbook-launch-5678901235",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Culinary Center", 
        address: { 
          address_1: "123 Foodie St",
          city: "San Francisco",
          region: "CA",
          postal_code: "94111",
          country: "US"
        },
        latitude: "37.804363",
        longitude: "-122.409416"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 2000, // $20.00
          },
          free: false,
        },
      ],
    },
    {
      id: "12",
      name: { text: "Paris Sci-Fi Book Con" },
      description: { text: "Meet your favorite sci-fi authors and explore the latest in the genre." },
      start: { local: "2024-09-01T10:00:00" },
      end: { local: "2024-09-02T18:00:00" },
      url: "https://www.eventbrite.com/e/paris-sci-fi-book-con-6789012346",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "La Cité des Sciences et de l'Industrie", 
        address: { 
          address_1: "30 Avenue Corentin Cariou",
          city: "Paris",
          region: "Île-de-France",
          postal_code: "75019",
          country: "FR"
        },
        latitude: "48.894445",
        longitude: "2.387697"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "EUR",
            value: 3500, // €35.00
          },
          free: false,
        },
      ],
    },
    {
      id: "13",
      name: { text: "Norwich Literary Night" },
      description: { text: "An evening of readings and discussions with local authors." },
      start: { local: "2024-11-10T18:30:00" },
      end: { local: "2024-11-10T21:00:00" },
      url: "https://www.eventbrite.com/e/norwich-literary-night-7890123457",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Norwich Arts Centre", 
        address: { 
          address_1: "St Benedict's St",
          city: "Norwich",
          region: "Norfolk",
          postal_code: "NR2 4PG",
          country: "GB"
        },
        latitude: "52.629568",
        longitude: "1.289833"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "14",
      name: { text: "San Francisco Environmental Book Launch" },
      description: { text: "Discover the latest books on environmental issues and sustainability." },
      start: { local: "2024-10-05T15:00:00" },
      end: { local: "2024-10-05T17:00:00" },
      url: "https://www.eventbrite.com/e/sf-environmental-book-launch-8901234568",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Green Earth Center", 
        address: { 
          address_1: "456 Greenway",
          city: "San Francisco",
          region: "CA",
          postal_code: "94104",
          country: "US"
        },
        latitude: "37.791679",
        longitude: "-122.401826"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 1800, // $18.00
          },
          free: false,
        },
      ],
    },
    {
      id: "15",
      name: { text: "Paris Noir: Crime Fiction Festival" },
      description: { text: "Explore the world of crime fiction with international authors." },
      start: { local: "2024-12-03T10:00:00" },
      end: { local: "2024-12-03T19:00:00" },
      url: "https://www.eventbrite.com/e/paris-noir-crime-fiction-festival-9012345679",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Maison de la Poésie", 
        address: { 
          address_1: "157 Rue Saint-Martin",
          city: "Paris",
          region: "Île-de-France",
          postal_code: "75003",
          country: "FR"
        },
        latitude: "48.862975",
        longitude: "2.351302"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "EUR",
            value: 2500, // €25.00
          },
          free: false,
        },
      ],
    },
    {
      id: "16",
      name: { text: "Norwich Science Fiction Meetup" },
      description: { text: "Join sci-fi enthusiasts for discussions on the latest in science fiction." },
      start: { local: "2024-11-20T17:00:00" },
      end: { local: "2024-11-20T19:00:00" },
      url: "https://www.eventbrite.com/e/norwich-sci-fi-meetup-9123456780",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Norwich Sci-Fi Club", 
        address: { 
          address_1: "101 Galaxy Rd",
          city: "Norwich",
          region: "Norfolk",
          postal_code: "NR2 3PQ",
          country: "GB"
        },
        latitude: "52.630329",
        longitude: "1.297736"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "17",
      name: { text: "Paris Children's Book Day" },
      description: { text: "A fun day for children to discover new books and meet authors." },
      start: { local: "2024-06-18T10:00:00" },
      end: { local: "2024-06-18T16:00:00" },
      url: "https://www.eventbrite.com/e/paris-childrens-book-day-1234567890",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Paris Children's Library", 
        address: { 
          address_1: "123 Rue de Rivoli",
          city: "Paris",
          region: "Île-de-France",
          postal_code: "75001",
          country: "FR"
        },
        latitude: "48.860611",
        longitude: "2.337644"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "18",
      name: { text: "San Francisco Mystery Night" },
      description: { text: "Join us for a night of thrilling mystery book readings." },
      start: { local: "2024-11-15T19:00:00" },
      end: { local: "2024-11-15T22:00:00" },
      url: "https://www.eventbrite.com/e/sf-mystery-night-2345678901",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: { 
        name: "Mystery House", 
        address: { 
          address_1: "456 Mystery Ln",
          city: "San Francisco",
          region: "CA",
          postal_code: "94110",
          country: "US"
        },
        latitude: "37.752254",
        longitude: "-122.414176"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 1500, // $15.00
          },
          free: false,
        },
      ],
    },
    {
      id: "19",
      name: { text: "Writing Workshop - This Week" },
      description: { text: "Improve your writing skills with expert guidance." },
      start: { local: "2024-09-17T10:00:00" }, // This week (Sept 17)
      end: { local: "2024-09-17T12:00:00" },
      url: "https://www.eventbrite.com/e/writing-workshop-1234567890",
      is_free: false,
      category: { id: "103", name: "Books" },
      venue: {
        name: "City Library",
        address: {
          address_1: "123 Library St",
          city: "New York",
          region: "NY",
          postal_code: "10001",
          country: "US"
        },
        latitude: "40.712776",
        longitude: "-74.005974"
      },
      logo: { url: "/Writing-Workshop.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 2500, // $25.00
          },
          free: false,
        },
      ],
    },
    {
      id: "20",
      name: { text: "Rock Concert - This Weekend" },
      description: { text: "Join us for an evening of rock music!" },
      start: { local: "2024-09-22T19:00:00" }, // This weekend (Sept 22)
      end: { local: "2024-09-22T22:00:00" },
      url: "https://www.eventbrite.com/e/rock-concert-2345678901",
      is_free: false,
      category: { id: "104", name: "Music" },
      venue: {
        name: "Madison Square Garden",
        address: {
          address_1: "4 Pennsylvania Plaza",
          city: "New York",
          region: "NY",
          postal_code: "10001",
          country: "US"
        },
        latitude: "40.7505045",
        longitude: "-73.9934387"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 5000, // $50.00
          },
          free: false,
        },
        {
          name: "VIP Admission",
          cost: {
            currency: "USD",
            value: 15000, // $150.00
          },
          free: false,
        },
      ],
    },
    {
      id: "21",
      name: { text: "Author Meet-Up - Next Week" },
      description: { text: "Meet your favorite authors and get your books signed." },
      start: { local: "2024-09-25T15:00:00" }, // Next week (Sept 25)
      end: { local: "2024-09-25T17:00:00" },
      url: "https://www.eventbrite.com/e/author-meet-up-3456789012",
      is_free: true,
      category: { id: "103", name: "Books" },
      venue: {
        name: "Bookstore Central",
        address: {
          address_1: "456 Book St",
          city: "San Francisco",
          region: "CA",
          postal_code: "94102",
          country: "US"
        },
        latitude: "37.774929",
        longitude: "-122.419418"
      },
      logo: { url: "/Author-Signing.jpg" },
    },
    {
      id: "22",
      name: { text: "Food Truck Festival - Next Weekend" },
      description: { text: "A variety of food trucks offering delicious cuisine." },
      start: { local: "2024-09-28T11:00:00" }, // Next weekend (Sept 28)
      end: { local: "2024-09-28T15:00:00" },
      url: "https://www.eventbrite.com/e/food-truck-festival-4567890123",
      is_free: true,
      category: { id: "105", name: "Food & Drink" },
      venue: {
        name: "Central Park",
        address: {
          address_1: "789 Park Ave",
          city: "New York",
          region: "NY",
          postal_code: "10024",
          country: "US"
        },
        latitude: "40.785091",
        longitude: "-73.968285"
      },
      logo: { url: "/Default-Image.jpg" },
    },
    {
      id: "20",
      name: { text: "Rock Concert - This Weekend" },
      description: { text: "Join us for an evening of rock music!" },
      start: { local: "2024-09-21T19:00:00" }, // Updated to fall within this weekend (Saturday, Sep 21, 2024)
      end: { local: "2024-09-21T22:00:00" },
      url: "https://www.eventbrite.com/e/rock-concert-2345678901",
      is_free: false,
      category: { id: "104", name: "Music" },
      venue: {
        name: "Madison Square Garden",
        address: {
          address_1: "4 Pennsylvania Plaza",
          city: "New York",
          region: "NY",
          postal_code: "10001",
          country: "US"
        },
        latitude: "40.7505045",
        longitude: "-73.9934387"
      },
      logo: { url: "/Default-Image.jpg" },
      ticket_classes: [
        {
          name: "General Admission",
          cost: {
            currency: "USD",
            value: 5000, // $50.00
          },
          free: false,
        },
        {
          name: "VIP Admission",
          cost: {
            currency: "USD",
            value: 15000, // $150.00
          },
          free: false,
        },
      ],
    },
  ],
};

export default mockEventData;
