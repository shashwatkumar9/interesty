
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LaLigaNewYearFixtureTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>La Liga New Year Fixture Tickets | Start the Year with Football!</title>
        <meta name="description" content="Buy official La Liga New Year fixture tickets. Experience the excitement of football to kick off the new year in Spain. A great way to celebrate!" />
        <meta name="keywords" content="la liga new year tickets, new year football tickets, festive football tickets, la liga holiday fixtures" />
        <link rel="canonical" href="https://www.ticketsfootball.com/la-liga-new-year-fixture-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/la-liga-tickets" className="hover:text-green-600">La Liga Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">La Liga New Year Fixture Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">La Liga New Year Fixture Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Start the new year with a bang by attending a La Liga match! The New Year's fixtures offer thrilling encounters and a chance to see your favorite teams in action as the Spanish season continues.          </p>

          {/* Call to Action */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Kick Off the New Year with Football!</h2>
            <p className="mb-4">Tickets for La Liga New Year fixtures are a fantastic way to celebrate the start of a new year. Secure your place for a memorable matchday experience.</p>
            <a href="#ticket-listings" className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for La Liga Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all La Liga matches during the New Year period.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for La Liga New Year Fixtures</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to the event date for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More La Liga Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/la-liga-tickets" className="text-yellow-600 hover:underline">La Liga Tickets</Link>
              <Link to="/la-liga-season-opener-tickets" className="text-yellow-600 hover:underline">La Liga Season Opener Tickets</Link>
              <Link to="/la-liga-final-day-tickets" className="text-yellow-600 hover:underline">La Liga Final Day Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaLigaNewYearFixtureTicketsPage;
