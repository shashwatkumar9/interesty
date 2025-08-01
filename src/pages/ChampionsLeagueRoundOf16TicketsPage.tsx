
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ChampionsLeagueRoundOf16TicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Champions League Round of 16 Tickets | The Knockout Stage Begins</title>
        <meta name="description" content="Buy official Champions League Round of 16 tickets. Witness Europe's elite clubs battle in the first knockout stage. Secure your seats for thrilling encounters." />
        <meta name="keywords" content="champions league round of 16 tickets, ucl round of 16 tickets, buy champions league knockout tickets, champions league last 16 tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/champions-league-round-16-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/champions-league-tickets" className="hover:text-green-600">Champions League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Champions League Round of 16 Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Champions League Round of 16 Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            The UEFA Champions League Round of 16 marks the beginning of the knockout phase, where Europe's top clubs face off in high-stakes, two-legged ties. Every goal, every save, and every moment counts.          </p>

          {/* Call to Action */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your UCL Knockout Tickets!</h2>
            <p className="mb-4">Tickets for the Champions League Round of 16 are always in high demand. Don't miss your chance to witness the drama unfold live.</p>
            <a href="#ticket-listings" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Champions League Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Champions League Round of 16 matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Champions League Round of 16</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Champions League Stages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/champions-league-quarter-final-tickets" className="text-blue-600 hover:underline">Champions League Quarter-Final Tickets</Link>
              <Link to="/champions-league-semi-final-tickets" className="text-blue-600 hover:underline">Champions League Semi-Final Tickets</Link>
              <Link to="/champions-league-final-tickets" className="text-blue-600 hover:underline">Champions League Final Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsLeagueRoundOf16TicketsPage;
